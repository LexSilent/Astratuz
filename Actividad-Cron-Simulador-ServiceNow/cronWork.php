<?php require_once 'Cron/vendor/autoload.php';

    //That is a simulator as ServiceNow---- //That check 29 times per minute, and send the status to a database for the Users
    //in the UI

    //Required for use Twilio
    use Twilio\Rest\Client;

    //sendEmail("JOEL","AVAILABLE");

    //sendMessage("6361283383","Ingeniero....");
    //Times per minute to repeat the process to check and update

    $ipAPI = "192.168.100.44:8000";

    $cont = 0;
	while($cont < 200){

        //Here get the services , status, and links from all the services
        $services = getAllTheServices($ipAPI);
        $services = json_decode($services);

        foreach($services->DATA as $each){
            $oldStatus = $each->STATUS;
            $status = sendPingTo($each->URL);
            if($status == $oldStatus) echo "Everything is same \n";
            else {
                changeStatus($each->ID,$status,$ipAPI);
                switch($status){
                    case 3: $status = "AVIALABLE"; break;
                    case 2: $status = "DISTURB"; break;
                    case 1: $status = "OFFLINE"; break; 
                }//switch
                sendMessage("6361283383","The service ". $each->SERVICE. " change the status to ".$status);
                sendEmail($each->SERVICE,$status);
                echo "\nChanged ".$each->ID." from ".$oldStatus." to ". $status."\n";
            }//else the status change
        }//ping to all the services

        echo "New\n\n";

        $cont++;
    }//while*/

    function getAllTheServices($ipAPI){
        //first get all the status from the API in laravel
        $url = 'http://'.$ipAPI.'/api/services/status';
        //that is our own login for the cron work
        $d = new stdClass();
        $d->USER = 'cron@astratus.com';
        $d->PASSWORD = '5tuZ.m10';
        $data = json_encode($d);
        //the data for send like POST to the API laravel
        $options = array(
            'http' => array(
                'header' => 'Content-type: application/json',
                'method' => 'POST',
                'content' => $data
            )
        );

        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);

        return $result;
    }//getAllTheServices

    function changeStatus($serviceId,$status,$ipAPI){

         //first the link for post the new status
         $url2 = 'http://'.$ipAPI.'/api/services/update/status';
         //that is our own login for the cron work, and send the necesary data
         $s = new stdClass();
         $s->USER = 'cron@astratus.com';
         $s->PASSWORD = '5tuZ.m10';
         $s->SERVICEID = $serviceId;
         $s->STATUS = $status;
         $service = json_encode($s);
         //the data for send like POST to the API laravel
         $options2 = array(
             'http' => array(
                 'header' => 'Content-type: application/json',
                 'method' => 'POST',
                 'content' => $service
             )
         );
 
         $context2 = stream_context_create($options2);
         $result2 = file_get_contents($url2, false, $context2);

         return $result2;
    
    }//changeStatus

    function addHistory($serviceId, $status, $ipAPI){

        //first the link for post the new status
        $url4 = 'http://'.$ipAPI.'/api/services/update/history';

        //that is our own login for the cron work, and send the necesary data
        $history = new stdClass();
        $history->USER = 'cron@astratus.com';
        $history->PASSWORD = '5tuZ.m10';
        $history->SERVICEID = $serviceId;
        $history->STATUS = $status;
        $data = json_encode($history);

        //the data for send like POST to the API laravel
        $options4 = array(
            'http' => array(
                'header' => 'Content-type: application/json',
                'method' => 'POST',
                'content' => $data
            )
        );

        $context4 = stream_context_create($options4);
        $result4 = file_get_contents($url4, false, $context4);

        return $result4;

    }//addHistory

    function sendPingTo($ip){
        $packetLosses = null; //Variable to use late
        $packetsToSend = 2; 

        //Send ping
        exec("ping -c ".$packetsToSend." ".$ip, $output, $result);

        //That print the 3 status options
        switch($result){

            case 0: 
                //obtain the packet losses line
                $status =  explode(",",$output[$packetsToSend + 3])[2];

                //that is the value in % for the pakect loses
                $packetLosses = intval(explode(" ",$status)[1]);

                //if the packet losses is 0 it's okay, but is higher is disturb
                if($packetLosses == 0) return 3;
                else return 2;

            case 1: return 1; 
            case 2: return 4;

        }//switch
    }//sendPingTo

    function sendMessage($phone,$message){
        // Find your Account SID and Auth Token at twilio.com/console
        // and set the environment variables. See http://twil.io/secure

        $sid = "AC8387edaef0a8dc779a6b94b086a861a6";
        $token = "cbf5f047ee69457009c6fab96bb66658";
        $twilio = new Client($sid, $token);

        $message = $twilio->messages
        ->create("+52".$phone,["body" => $message, "from" => "+15075163550"]);

        print($message->sid);
    }//sendMessage

    function sendEmail($serviceName,$status){

        //get the date
        $date = getdate();

        //We have in a server the code for send an email without have that code in a server
        $url3 = 'https://artdemy.000webhostapp.com/sendemail.php';

        //that is the Data to send with post
        $email = new stdClass();
        $email->remitente = "no-reply@astratus.com";
        $email->receptor = "alexjoelaguilar@hotmail.com";
        $email->asunto = "Astratus Alert";
        $email->mensaje = "Cambio de status \nEl status del servicio ".$serviceName." ha cambiado a ". $status . "\n    Fecha: ". $date["mday"]. "/".$date["mon"]."/".$date["year"];

        $options3 = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($email)
            )
        );

        $context3 = stream_context_create($options3);
        $result3 = file_get_contents($url3, false, $context3);  

        return $result3;

    }//sendEmail

?>