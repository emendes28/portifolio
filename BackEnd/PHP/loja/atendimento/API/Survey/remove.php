<?php
	/*****  ServiceSurvey::remove  ***************************************
	 *
	 *  $Id: remove.php,v 1.4 2005/02/06 00:42:27 atendchat Exp $
	 *
	 ****************************************************************/

	if ( ISSET( $_OFFICE_remove_ServiceSurvey_LOADED ) == true )
		return ;

	$_OFFICE_remove_ServiceSurvey_LOADED = true ;

	/*****  ServiceSurvey_remove_OldFootprints  *********************
	 *
	 *  History:
	 *	Holger				May 31, 2002
	 *
	 *****************************************************************/
	FUNCTION ServiceSurvey_remove_OldFootprints( &$dbh,
								$aspid,
								$expireday )
	{
		if ( ( $aspid == "" ) || ( $expireday == "" ) )
		{
			return false ;
		}
		$aspid = database_mysql_quote( $aspid ) ;
		$expireday = database_mysql_quote( $expireday ) ;

		$query = "DELETE FROM chatfootprints WHERE aspID = $aspid AND created < $expireday" ;
		database_mysql_query( $dbh, $query ) ;
		
		if ( $dbh[ 'ok' ] )
		{
			return true ;
		}
		return false ;
	}

?>