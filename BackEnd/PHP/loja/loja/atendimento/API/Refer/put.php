<?php
	/*****  ServiceRefer::put  ***************************
	 *
	 *  $Id: put.php,v 1.4 2005/02/06 00:42:27 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_PUT_ServiceRefer_LOADED ) == true )
		return ;

	$_OFFICE_PUT_ServiceRefer_LOADED = true ;

	/*****  ServiceRefer_put_Refer  *******************************
	 *
	 *  History:
	 *	Holger					July 17, 2002
	 *
	 *****************************************************************/
	FUNCTION ServiceRefer_put_Refer( &$dbh,
					$aspid,
					$ip,
					$refer,
					$trackid )
	{
		if ( ( $ip == "" ) || ( $aspid == "" )
			|| ( $refer == "" ) )
		{
			return false ;
		}
		$aspid = database_mysql_quote( $aspid ) ;
		$ip = database_mysql_quote( $ip ) ;
		$refer = database_mysql_quote( $refer ) ;
		$trackid = database_mysql_quote( $trackid ) ;
		$now = time() ;

		$query = "SELECT * FROM chatrefer WHERE ip = '$ip' AND aspID = $aspid" ;
		database_mysql_query( $dbh, $query ) ;
		$data = database_mysql_fetchrow( $dbh ) ;

		if ( !isset( $data['ip'] ) || $trackid )
		{
			if ( $trackid )
				$query = "REPLACE INTO chatrefer VALUES ( '$aspid', $now, '$trackid', '$ip', '$refer' )" ;
			else
				$query = "INSERT INTO chatrefer VALUES ( '$aspid', $now, 0, '$ip', '$refer' )" ;
			database_mysql_query( $dbh, $query ) ;

			if ( $dbh[ 'ok' ] )
			{
				return true ;
			}
		}
		return false ;
	}

?>