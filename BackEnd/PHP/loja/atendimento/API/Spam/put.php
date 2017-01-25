<?php
	/*****  ServiceSpam::put  ***************************************
	 *
	 *  $Id: put.php,v 1.3 2005/02/06 00:42:27 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_PUT_ServiceSpam_LOADED ) == true )
		return ;

	$_OFFICE_PUT_ServiceSpam_LOADED = true ;

	/*****  ServiceSpam_put_IP  *******************************
	 *
	 *  History:
	 *	Holger				August 25, 2004
	 *
	 *****************************************************************/
	FUNCTION ServiceSpam_put_IP( &$dbh,
					$ip,
					$aspid )
	{
		if ( ( $ip == "" ) || ( $aspid == "" ) )
		{
			return false ;
		}
		$ip = database_mysql_quote( $ip ) ;
		$aspid = database_mysql_quote( $aspid ) ;
		$now = time() ;

		$query = "REPLACE INTO chatspamips VALUES( $aspid, '$ip', $now )" ;
		database_mysql_query( $dbh, $query ) ;

		if ( $dbh[ 'ok' ] )
		{
			return true ;
		}
		return false ;
	}
?>
