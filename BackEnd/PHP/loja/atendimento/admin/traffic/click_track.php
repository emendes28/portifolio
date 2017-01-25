<?php
	/*******************************************************
	* Atendimento Online
	*******************************************************/
	session_start() ;
	if ( isset( $_SESSION['session_setup'] ) ) { $session_setup = $_SESSION['session_setup'] ; } else { HEADER( "location: ../../setup/index.php" ) ; exit ; }
	include_once( "../../API/Util_Dir.php" ) ;
	if ( !Util_DIR_CheckDir( "../..", $session_setup['login'] ) )
	{
		HEADER( "location: ../../setup/options.php" ) ;
		exit ;
	}
	include_once("../../web/conf-init.php");
	$DOCUMENT_ROOT = realpath( preg_replace( "/http:/", "", $DOCUMENT_ROOT ) ) ;
	include_once("$DOCUMENT_ROOT/web/$session_setup[login]/$session_setup[login]-conf-init.php") ;
	include_once("$DOCUMENT_ROOT/API/sql.php" ) ;
	include_once("$DOCUMENT_ROOT/system.php") ;
	include_once("$DOCUMENT_ROOT/lang_packs/$LANG_PACK.php") ;
	include_once("$DOCUMENT_ROOT/web/VERSION_KEEP.php") ;
	include_once("$DOCUMENT_ROOT/API/Util_Page.php") ;
	include_once("$DOCUMENT_ROOT/API/Users/get.php") ;
	include_once("$DOCUMENT_ROOT/API/Clicks/get.php") ;
	include_once("$DOCUMENT_ROOT/API/Clicks/put.php") ;
	include_once("$DOCUMENT_ROOT/API/Clicks/update.php") ;
	include_once("$DOCUMENT_ROOT/API/Clicks/remove.php") ;

	$section = 7;			// Section number - see header.php for list of section numbers
	$page_title = " - Administration";

	$nav_line = '<a href="../../setup/options.php" class="nav">:: Home</a>';
	$css_path = "../../" ;
?>
<?php

	// initialize
	$action = $error_mesg = "" ;
	$success = $deptid = $trackid = 0 ;

	// get variables
	if ( isset( $_POST['action'] ) ) { $action = $_POST['action'] ; }
	if ( isset( $_GET['action'] ) ) { $action = $_GET['action'] ; }
	if ( isset( $_GET['trackid'] ) ) { $trackid = $_GET['trackid'] ; }
	if ( isset( $_POST['trackid'] ) ) { $trackid = $_POST['trackid'] ; }

	if ( preg_match( "/(MSIE)|(Gecko)/", $_SERVER['HTTP_USER_AGENT'] ) )
	{
		$text_width = "50" ;
		$text_width_long = "85" ;
	}
	else
	{
		$text_width = "15" ;
		$text_width_long = "43" ;
	}
?>
<?php
	// functions
?>
<?php
	// conditions

	if ( $action == "create" )
	{
		if ( $trackid )
		{
			ServiceClicks_update_TrackingURL( $dbh, $session_setup['aspID'], $trackid, $_POST['name'], $_POST['landing_url'], $_POST['color'] ) ;
			$trackid = 0 ;
		}
		else
		{
			ServiceClicks_put_Tracking( $dbh, $session_setup['aspID'], $_POST['name'], $_POST['landing_url'], $_POST['color'] ) ;
		}
		$success = 1 ;
	}
	else if ( $action == "delete" )
	{
		ServiceClicks_remove_TrackingURL( $dbh, $session_setup['aspID'], $trackid ) ;
		$success = 1 ;
	}

	$url_edit = ServiceClicks_get_TrackingURLInfoByID( $dbh, $session_setup['aspID'], $trackid ) ;
	$urls = ServiceClicks_get_AllTrackingURLs( $dbh, $session_setup['aspID'] ) ;
?>
<?php include_once("$DOCUMENT_ROOT/setup/header.php") ; ?>
<script language="JavaScript">
<!--
	function do_submit()
	{
		if ( ( document.form.name.value == "" ) || ( document.form.landing_url.value == "" )
			|| ( document.form.landing_url.value == "http://" ) )
			alert( "Todos os campos precisam ser preenchidos." ) ;
		else
			document.form.submit() ;
	}

	function verify_url()
	{
		if ( ( document.form.landing_url.value == "" ) || ( document.form.landing_url.value == "http://" ) )
			alert( "URL Invalida." ) ;
		else
		{
			newwin = window.open( document.form.landing_url.value, "verify" ) ;
			newwin.focus() ;
		}
	}

	function denied()
	{
		alert( "Selecione a cor de indicacao." ) ;
		document.form.name.focus() ;
	}

	function switch_color( color )
	{
		document.form.color.value = color ;
	}

	function do_delete( trackid )
	{
		if ( confirm( "Deletar a URL?" ) )
		{
			location.href = "click_track.php?action=delete&trackid="+trackid ;
		}
	}
//-->
</script>

<table width="100%" border="0" cellspacing="0" cellpadding="15">
<tr>
  <td width="15%" valign="top" align="center"><img src="../../images/markg.png" /></td>
  <td width="100%" valign="top"> 
	<p><span class="title">Marketing: Rastreio de Campanhas de Pagamento por clique.</span><br>
	  Crie URLs para para rastrear suas campanhas de pagamento por clique ( ex.: Google Adwords, UOL, Yahoo). <br />
	  Voc&ecirc; poder&aacute; acompanhar as suas campnhas de pagamento por clique em tempo real atrav&eacute;s do painel de atendimento.  <?php echo ( isset( $success ) && $success ) ? "<font color=\"#29C029\"><big><b>Update Success!</b></big></font>" : "" ?></p>

		<form method="POST" action="click_track.php" name="form">
		<input type="hidden" name="action" value="create">
		<input type="hidden" name="trackid" value="<?php echo isset( $url_edit['trackID'] ) ? $url_edit['trackID'] : "" ?>">
		<table cellspacing=0 cellpadding=2 border=0>
		<tr>
			<td></td>
			<td><span class="basetxt">
		      <p>Nome do An&uacute;ncio/Campanha (exemplo: "Campanha do Google")<br>
                <input type="text" name="name" size="<?php echo $text_width ?>" maxlength="50" class="input" value="<?php echo isset( $url_edit['name'] ) ? $url_edit['name'] : "" ?>">
</p>
		      <p>URL de destino do an&uacute;ncio (&Eacute; a p&aacute;gina que o visitante ser&aacute; direcionado quando clicar no an&uacute;ncio, ex.: http://www.meusite.com.br ou http://www.meusite.com.br/meuanuncio.html)<span class="basetxt">.<br>
              <input type="text" name="landing_url" size="<?php echo $text_width ?>" maxlength="200" class="input" value="<?php echo ( isset( $url_edit['landing_url'] ) ) ? $url_edit['landing_url'] : "http://" ?>">
                        </span><span class="smalltxt">[ <a href="JavaScript:verify_url()">verificar URL</a> ]</span></p></td>
		</tr>
		<tr><td>&nbsp;</td>
		</tr>
		<tr>
			<td></td>
			<td><span class="basetxt">
			  Selecione a cor de indica&ccedil;&atilde;o (Cor que ser&aacute; exibida em destaque no painel de atendimento online).<br>
				<table cellspacing=2 cellpadding=0 border=0>
				<tr>
					<td>
						<table cellspacing=2 cellpadding=0 border=0>
						<tr>
							<td bgColor="#DDFFEE"><a href="JavaScript:switch_color('#DDFFEE')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#FFE6E6"><a href="JavaScript:switch_color('#FFE6E6')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#EAEAF4"><a href="JavaScript:switch_color('#EAEAF4')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#FFEEDD"><a href="JavaScript:switch_color('#FFEEDD')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#FFC1FF"><a href="JavaScript:switch_color('#FFC1FF')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#FFFFCE"><a href="JavaScript:switch_color('#FFFFCE')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#D9FFFF"><a href="JavaScript:switch_color('#D9FFFF')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#C4C4FF"><a href="JavaScript:switch_color('#C4C4FF')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#FFD8B0"><a href="JavaScript:switch_color('#FFD8B0')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
							<td bgColor="#BFDFDF"><a href="JavaScript:switch_color('#BFDFDF')"><img src="<?php echo $BASE_URL ?>/images/spacer.gif" width="15" height="15" border=1></a></td>
						</tr>
						</table>
					</td>
					<td><font size=2><input type="text" name="color" size="7" maxlength="7" class="input" OnFocus="denied()" value="<?php echo isset( $url_edit['color'] ) ? $url_edit['color'] : "" ?>"></td>
				</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td><input type="button" OnClick="do_submit()" class="mainButton" value="<?php echo isset( $url_edit['trackID'] ) ? "Atualizar" : "Criar" ?>"></td>
		</tr>
		<tr><td colspan=2>&nbsp;<br>&nbsp;</td></tr>
		<tr>
			<td>&nbsp;</td>
			<td>
				<table cellspacing=0 cellpadding=0 border=0>
				<tr>
					<td>Total de Cliques Rastreados Hoje:</td>
					<td> <input type="text" size=5 name="ctoday" style="color : #002E5B; font-family : Arial, Helvetica, sans-serif; font-size : 12px; font-weight : bold; border-color : #F2F2F2; background : #F2F2F2;" value=""></td>
				</tr>
				</table>
			</td>
		</tr>
		</form>
		</table>
	
	</td>
</tr>
<tr>
	<form>
	<td colspan=2>
		<table cellspacing=1 cellpadding=2 border=0 width="100%">
		<?php
			$m = date( "m",time()+$TIMEZONE ) ;
			$y = date( "Y",time()+$TIMEZONE ) ;
			$d = date( "j",time()+$TIMEZONE ) ;
			// the timespan to get the stats
			$stat_begin = mktime( 0,0,1,$m,$d,$y ) ;
			$stat_end = mktime( 23,59,59,$m,$d,$y ) ;

			$ctoday = 0 ;

			for ( $c = 0; $c < count( $urls ); ++$c )
			{
				$url = $urls[$c] ;
				$total_clicks = ServiceClicks_get_TotalTrackingClicks( $dbh, $session_setup['aspID'], $url['trackID'] ) ;
				if ( !$total_clicks ) { $total_clicks = 0 ; }

				$class = "altcolor1" ;
				$day_clicks_array = ServiceClicks_get_TotalTrackingClicksDay( $dbh, $session_setup['aspID'], $url['trackID'], $stat_begin, $stat_end ) ;
				
				if ( isset( $day_clicks_array[0] ) )
					$day_clicks = $day_clicks_array[0] ;
				else
					$day_clicks['clicks'] = 0 ;

				$ctoday += $day_clicks['clicks'] ;

				print "
					<tr class=\"$class\">
						<th align=left>Nome</th>
						<th align=left>URL de Destino</td>
						<th>Cliques Hoje</th>
						<th>Total de Cliques</th>
						<th align=left width=\"10\">&nbsp;</td>
						<th align=left width=\"10\">&nbsp;</td>
					</tr>
					<tr class=\"$class\">
						<td bgColor=\"$url[color]\">$url[name] &nbsp;&nbsp; </td>
						<td><a href=\"$url[landing_url]\" target=\"new\" name=\"track_$url[trackID]\">$url[landing_url]</a></td>
						<td align=center>$day_clicks[clicks]</td>
						<td align=center><a href=\"click_track_view.php?trackid=$url[trackID]\">$total_clicks <img src=\"../../images/graph_icon.gif\" width=\"15\" height=\"15\" border=0 alt=\"View Stats\"></a></td>
						<td><a href=\"click_track.php?trackid=$url[trackID]\">Editar</a></td>
						<td><a href=\"JavaScript:do_delete( $url[trackID] )\">Deletar</a></td>
					</tr>
					<tr class=\"$class\">
						<td colspan=6>
							<li> Para rastrear utilize a URL abaixo no seu anúncio.<br>
							URL de Rastreamento: <input type=text size=$text_width_long maxlength=260 class=\"input\" value=\"$BASE_URL/c.php?k=$session_setup[aspID].$url[trackID].$url[unique_key]\">
						</td>
					</tr>
					<tr class=\"$class\"> 
						<td height=\"5\" class=\"hdash2\" colspan=6><img src=\"../images/spacer.gif\" width=\"1\" height=\"5\"></td>
					</tr>
				" ;
			}
		?>
		<script language="JavaScript"> document.form.ctoday.value = <?php echo $ctoday ?> ; </script>
		</table>
	</td>
	</form>
</tr>
</table>

<?php include_once( "$DOCUMENT_ROOT/setup/footer.php" ) ; ?>