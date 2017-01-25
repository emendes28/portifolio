<?php
	/*******************************************************
	* Atendimento Online
	*******************************************************/
	session_start() ;
	if ( isset( $_SESSION['session_setup'] ) ) { $session_setup = $_SESSION['session_setup'] ; } else { HEADER( "location: ../../setup/index.php" ) ; exit ; }
	include_once( "../../API/Util_Dir.php" ) ;
	if ( !Util_DIR_CheckDir( "../..", $session_setup['login'] ) )
	{
		HEADER( "location: index.php" ) ;
		exit ;
	}
	include_once("../../web/conf-init.php");
	$DOCUMENT_ROOT = realpath( preg_replace( "/http:/", "", $DOCUMENT_ROOT ) ) ;
	include_once("$DOCUMENT_ROOT/web/$session_setup[login]/$session_setup[login]-conf-init.php") ;
	include_once("$DOCUMENT_ROOT/system.php") ;
	include_once("$DOCUMENT_ROOT/lang_packs/$LANG_PACK.php") ;
	include_once("$DOCUMENT_ROOT/web/VERSION_KEEP.php") ;
	include_once("$DOCUMENT_ROOT/API/sql.php" ) ;
	include_once("$DOCUMENT_ROOT/API/Util_Cal.php" ) ;
	include_once("$DOCUMENT_ROOT/API/Clicks/get.php") ;
	$section = 7;			// Section number - see header.php for list of section numbers

	// This is used in footer.php and it places a layer in the menu area when you are in
	// a section > 0 to provide navigation back.
	// This is currently set as a javascript back, but it could be replaced with explicit
	// links as using the javascript back button can cause problems after submitting a form
	// (cause the data to get resubmitted)

	$nav_line = '<a href="click_track.php" class="nav">:: Previous</a>';
	$css_path = "../../" ;
?>
<?php

	// initialize
	// initialize
	$action = "" ;
	$trackid = $m = $y = $d = 0 ;
	if ( isset( $_GET['m'] ) ) { $m = $_GET['m'] ; }
	if ( isset( $_GET['d'] ) ) { $d = $_GET['d'] ; }
	if ( isset( $_GET['y'] ) ) { $y = $_GET['y'] ; }
	if ( isset( $_POST['action'] ) ) { $action = $_POST['action'] ; }
	if ( isset( $_GET['action'] ) ) { $action = $_GET['action'] ; }
	if ( isset( $_GET['trackid'] ) ) { $trackid = $_GET['trackid'] ; }
	if ( isset( $_POST['trackid'] ) ) { $trackid = $_POST['trackid'] ; }

	if ( !$m )
		$m = date( "m",time()+$TIMEZONE ) ;
	if ( !$y )
		$y = date( "Y",time()+$TIMEZONE ) ;
	$d = date( "j",time()+$TIMEZONE ) ;


	// this is for the monthly breakdown
	$stat_begin = mktime( 0,0,0,$m,1,$y ) ;
	$stat_end = mktime( 23,59,59,$m,31,$y ) ;
	
	$stats = ServiceClicks_get_TotalTrackingClicksDay( $dbh, $session_setup['aspID'], $trackid, $stat_begin, $stat_end ) ;

	$stats_hash = Array() ;
	// create hash
	for ( $c = 0; $c < count( $stats ); ++$c )
	{
		$stat = $stats[$c] ;
		$statdate = $stat['statdate'] ;
		$stats_hash[$statdate] = $stat['clicks'] ;
	}

	$trackinfo = ServiceClicks_get_TrackingURLInfoByID( $dbh, $session_setup['aspID'], $trackid ) ;
?>
<?php
	// functions
?>
<?php
	// conditions
?>
<?php include_once("$DOCUMENT_ROOT/setup/header.php"); ?>
<!-- DO NOT REMOVE  -->
<!--  [DO NOT DELETE] -->
<table width="100%" border="0" cellspacing="0" cellpadding="15">
<tr>
 <td height="350" align="center" valign="top"><img src="../../images/markg.png"><br> <img src="../../images/spacer.gif" width="220" height="50">
	<form name="form" method="GET" action="click_track_view.php">
	<input type="hidden" name="trackid" value="<?php echo $trackid ?>">
	<select name="m">
	<?php
		for ( $c = 1; $c <= 12; ++$c )
		{
			$month = date( "F", mktime( 0,0,1,$c,1,$y ) ) ;
			
			if ($month == 'January')
						{
						  $month = 'Janeiro';
						}
						if ($month == 'February')
						{
						  $month = 'Fevereiro';
						}
						if ($month == 'March')
						{
						  $month = 'Mar&ccedil;o';
						}
						if ($month == 'April')
						{
						  $month = 'Abril';
						}
						if ($month == 'May')
						{
						  $month = 'Maio';
						}
						if ($month == 'June')
						{
						  $month = 'Junho';
						}
						if ($month == 'July')
						{
						  $month = 'Julho';
						}
						if ($month == 'August')
						{
						  $month = 'Agosto';
						}
						if ($month == 'September')
						{
						  $month = 'Setembro';
						}
						if ($month == 'October')
						{
						  $month = 'Outubro';
						}
						if ($month == 'November')
						{
						  $month = 'Novembro';
						}
						if ($month == 'December')
						{
						  $month = 'Dezembro';
						}
			
			$selected = "" ;
			if ( $c == $m )
				$selected = "selected" ;
			print "<option value=$c $selected>$month</option>" ;
		}
	?>
	</select>
	<select name="y">
	<?php
		for ( $c = 2003; $c <= 2100; ++$c )
		{
			$selected = "" ;
			if ( $c == $y )
				$selected = "selected" ;
			print "<option value=$c $selected>$c</option>" ;
		}
	?>
	</select>
	<br><br>
	<input type="submit" value="Ir para o M&ecirc;s" style="background-color : #E2E2E2; font-weight : bold; cursor: hand;">
	</form>
  </td> 
  <td valign="top" width="100%"> <p><span class="title">Marketing: Rastreio de Campanhas de Pagamento por Clique.</span>
  <p>
	Lista mensal dos cliques recebidos atrav&eacute;s do respectivo an&uacute;ncio rastreado: <big><strong><?php echo $trackinfo['name'] ?></strong></big>	</p>
	
	<table cellspacing=1 cellpadding=2 border=0 width="100%">
	  <tr align="left"> 
		<th nowrap>Dia</th>
		<th width="655" nowrap>Cliques</th>
	  </tr>
	<?php
		$grand_total = 0 ;
		for ( $c = 1; $m == date( "m", mktime( 0,0,1,$m,$c,$y ) ); ++$c )
		{
			$date = mktime( 0,0,1,$m,$c,$y ) ;
			$day = date( "F d, Y D", $date ) ;
			
			$dat11 = date( "D", $date ) ;
			
			            if ($dat11 == 'Mon')
						{
						  $dat11 = 'Segunda-feira';
						}
						if ($dat11 == 'Tue')
						{
						  $dat11 = 'Ter&ccedil;a-feira';
						}
						if ($dat11 == 'Wed')
						{
						  $dat11 = 'Quarta-feira';
						}
						if ($dat11 == 'Thu')
						{
						  $dat11 = 'Quinta-feira';
						}
						if ($dat11 == 'Fri')
						{
						  $dat11 = 'Sexta-feira';
						}
						if ($dat11 == 'Sat')
						{
						  $dat11 = 'S&aacute;bado';
						}
						if ($dat11 == 'Sun')
						{
						  $dat11 = 'Domingo';
						}
						
			 $dat22 = date( "d", $date ) ;
	
	         $dat33 = date( "F", $date ) ;
			 
			         if ($dat33 == 'January')
						{
						  $dat33 = 'Janeiro';
						}
						if ($dat33 == 'February')
						{
						  $dat33 = 'Fevereiro';
						}
						if ($dat33 == 'March')
						{
						  $dat33 = 'Mar&ccedil;o';
						}
						if ($dat33 == 'April')
						{
						  $dat33 = 'Abril';
						}
						if ($dat33 == 'May')
						{
						  $dat33 = 'Maio';
						}
						if ($dat33 == 'June')
						{
						  $dat33 = 'Junho';
						}
						if ($dat33 == 'July')
						{
						  $dat33 = 'Julho';
						}
						if ($dat33 == 'August')
						{
						  $dat33 = 'Agosto';
						}
						if ($dat33 == 'September')
						{
						  $dat33 = 'Setembro';
						}
						if ($dat33 == 'October')
						{
						  $dat33 = 'Outubro';
						}
						if ($dat33 == 'November')
						{
						  $dat33 = 'Novembro';
						}
						if ($dat33 == 'December')
						{
						  $dat33 = 'Dezembro';
						}
						
			$dat44 = date( "Y", $date ) ;

			$day_clicks = 0 ;
			if ( isset( $stats_hash[$date] ) )
				$day_clicks = $stats_hash[$date] ;
			$grand_total += $day_clicks ;

			$class = "class=\"altcolor1\"" ;
			if ( $c % 2 )
				$class = "class=\"altcolor2\"" ;

			if ( $c == $d )
				$class = "bgColor=\"#DDFFDD\"" ;

			print "
				<tr $class>
					<td>$dat11" . ", " . "$dat22" . " de " . "$dat33" . " de " . "$dat44</td>
					<td align=\"left\">$day_clicks</td>
				</tr>" ;
		}
	?>
	<tr class="altcolor3">
		<th width="210" nowrap align="left">Total Mensal</th>
		<th align="left"><?php echo $grand_total ?></th>
	</tr>
	 </table>
	
	</td>
</tr>
 </table>
<!-- DO NOT REMOVE  -->
<!--  [DO NOT DELETE] -->
<?php include_once( "$DOCUMENT_ROOT/setup/footer.php" ) ; ?>