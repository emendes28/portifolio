<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.0 Transitional//EN'>
<HTML>
<HEAD>
<TITLE><?php echo $dadosboleto["identificacao"]; ?></TITLE>
<META http-equiv=Content-Type content=text/html charset=ISO-8859-1>
<meta name="Generator" content="Projeto BoletoPHP - www.boletophp.com.br - Licen�a GPL" />
<style type=text/css>
<!--.cp {  font: bold 10px Arial; color: black}
<!--.ti {  font: 9px Arial, Helvetica, sans-serif}
<!--.ld { font: bold 15px Arial; color: #000000}
<!--.ct { FONT: 9px "Arial Narrow"; COLOR: #000033}
<!--.cn { FONT: 9px Arial; COLOR: black }
<!--.bc { font: bold 20px Arial; color: #000000 }
<!--.ld2 { font: bold 12px Arial; color: #000000 }
--></style> 
</head>

<BODY text=#000000 bgColor=#ffffff topMargin=0 rightMargin=0>
<table cellspacing=0 cellpadding=0 width=666 border=0><TBODY><TR><TD class=ct width=666><img height=1 src=images/6.png width=665 border=0></TD></TR><TR><TD class=ct width=666><div align=right><b class=cp>Recibo 
do Sacado</b></div></TD></tr></tbody></table>
<table cellspacing=0 cellpadding=0 width=666 border=0><tr><td width=150 valign="bottom" class=cp> 
  <span class="campo"><IMG 
      src="images/logo.gif" 
      border=0></span></td>
<td width=3 valign=bottom><img height=22 src=images/3.png width=2 border=0></td><td class=cpt width=58 valign=bottom><div align=center><font class=bc><?php echo $dadosboleto["codigo_banco_com_dv"]?></font></div></td><td width=3 valign=bottom><img height=22 src=images/3.png width=2 border=0></td><td class=ld align=right width=453 valign=bottom><span class=ld> 
<span class="campotitulo">
<?php echo $dadosboleto["linha_digitavel"]?>
</span></span></td>
</tr><tbody><tr><td colspan=5><img height=2 src=images/2.png width=666 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=298 height=13>Cedente</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=126 height=13>Ag�ncia/C�digo 
do Cedente</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=34 height=13>Esp�cie</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=53 height=13>Quantidade</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=120 height=13>Nosso 
n�mero</td></tr><tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=298 height=12> 
  <span class="campo"><?php echo $dadosboleto["cedente"]; ?></span></td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=126 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["agencia_codigo"]?>
  </span></td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=34 height=12><span class="campo">
  <?php echo $dadosboleto["especie"]?>
</span> 
 </td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=53 height=12><span class="campo">
  <?php echo $dadosboleto["quantidade"]?>
</span> 
 </td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top align=right width=120 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["nosso_numero"]?>
  </span></td>
</tr><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=298 height=1><img height=1 src=images/2.png width=298 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=126 height=1><img height=1 src=images/2.png width=126 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=34 height=1><img height=1 src=images/2.png width=34 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=53 height=1><img height=1 src=images/2.png width=53 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=120 height=1><img height=1 src=images/2.png width=120 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top colspan=3 height=13>N�mero 
do documento</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=132 height=13>CPF/CNPJ</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=134 height=13>Vencimento</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=180 height=13>Valor 
documento</td></tr><tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top colspan=3 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["numero_documento"]?>
  </span></td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=132 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["cpf_cnpj"]?>
  </span></td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=134 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["data_vencimento"]?>
  </span></td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top align=right width=180 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["valor_boleto"]?>
  </span></td>
</tr><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=113 height=1><img height=1 src=images/2.png width=113 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=72 height=1><img height=1 src=images/2.png width=72 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=132 height=1><img height=1 src=images/2.png width=132 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=134 height=1><img height=1 src=images/2.png width=134 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=180 height=1><img height=1 src=images/2.png width=180 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=113 height=1><img height=1 src=images/2.png width=113 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=112 height=1><img height=1 src=images/2.png width=112 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=113 height=1><img height=1 src=images/2.png width=113 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=113 height=1><img height=1 src=images/2.png width=113 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=180 height=1><img height=1 src=images/2.png width=180 border=0></td></tr></tbody></table>
<table cellspacing=0 cellpadding=0 border=0><tbody><tr><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=659 height=13>Sacado</td></tr><tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=659 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["sacado"]?>
  </span></td>
</tr><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=659 height=1><img height=1 src=images/2.png width=659 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr><td class=ct  width=7 height=12></td><td class=ct  width=564 >Demonstrativo</td><td class=ct  width=7 height=12></td><td class=ct  width=88 >Autentica��o 
mec�nica</td></tr><tr><td  width=7 ></td><td class=cp width=564>
<span class="campo">
  <?php echo $dadosboleto["demonstrativo1"]?><br>
  <?php echo $dadosboleto["demonstrativo2"]?><br>
  <?php echo $dadosboleto["demonstrativo3"]?><br>
  </span>
  </td><td  width=7 ></td><td  width=88 ></td></tr></tbody></table>
<table cellspacing=0 cellpadding=0 width=666 border=0><tr><td class=ct width=666></td></tr><tbody><tr><td class=ct width=666> 
<div align=right>Corte na linha pontilhada</div></td></tr><tr><td class=ct width=666><img height=1 src=images/6.png width=665 border=0></td></tr></tbody></table>
<br>
<table cellspacing=0 cellpadding=0 width=666 border=0><tr><td width=150 valign="bottom" class=cp> 
  <span class="campo"><IMG 
      src="images/real.gif" 
      border=0></span></td>
<td width=3 valign=bottom><img height=22 src=images/3.png width=2 border=0></td><td class=cpt width=58 valign=bottom><div align=center><font class=bc><?php echo $dadosboleto["codigo_banco_com_dv"]?></font></div></td><td width=3 valign=bottom><img height=22 src=images/3.png width=2 border=0></td><td class=ld align=right width=453 valign=bottom><span class=ld> 
<span class="campotitulo">
<?php echo $dadosboleto["linha_digitavel"]?>
</span></span></td>
</tr><tbody><tr><td colspan=5><img height=2 src=images/2.png width=666 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=472 height=13>Local 
de pagamento</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=180 height=13>Vencimento</td></tr><tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=472 height=12>Pag�vel 
em qualquer Banco at� o vencimento</td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top align=right width=180 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["data_vencimento"]?>
  </span></td>
</tr><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=472 height=1><img height=1 src=images/2.png width=472 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=180 height=1><img height=1 src=images/2.png width=180 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=472 height=13>Cedente</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=180 height=13>Ag�ncia/C�digo 
cedente</td></tr><tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=472 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["cedente"]?>
  </span></td>
<td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top align=right width=180 height=12> 
  <span class="campo">
  <?php echo $dadosboleto["agencia_codigo"]?>
  </span></td>
</tr><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=472 height=1><img height=1 src=images/2.png width=472 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=180 height=1><img height=1 src=images/2.png width=180 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr><td class=ct valign=top width=7 height=13> 
<img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=113 height=13>Data 
do documento</td><td class=ct valign=top width=7 height=13> <img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=153 height=13>N<u>o</u> 
documento</td><td class=ct valign=top width=7 height=13> <img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=62 height=13>Esp�cie 
doc.</td><td class=ct valign=top width=7 height=13> <img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=34 height=13>Aceite</td><td class=ct valign=top width=7 height=13> 
<img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=82 height=13>Data 
processamento</td><td class=ct valign=top width=7 height=13> <img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=180 height=13>Nosso 
n�mero</td></tr><tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=113 height=12><div align=left> 
  <span class="campo">
  <?php echo $dadosboleto["data_documento"]?>
  </span></div></td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=153 height=12> 
    <span class="campo">
    <?php echo $dadosboleto["numero_documento"]?>
    </span></td>
  <td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=62 height=12><div align=left><span class="campo">
    <?php echo $dadosboleto["especie_doc"]?>
  </span> 
 </div></td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=34 height=12><div align=left><span class="campo">
 <?php echo $dadosboleto["aceite"]?>
 </span> 
 </div></td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=82 height=12><div align=left> 
   <span class="campo">
   <?php echo $dadosboleto["data_processamento"]?>
   </span></div></td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top align=right width=180 height=12> 
     <span class="campo">
     <?php echo $dadosboleto["nosso_numero"]?>
     </span></td>
</tr><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=113 height=1><img height=1 src=images/2.png width=113 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=153 height=1><img height=1 src=images/2.png width=153 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=62 height=1><img height=1 src=images/2.png width=62 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=34 height=1><img height=1 src=images/2.png width=34 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=82 height=1><img height=1 src=images/2.png width=82 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=180 height=1> 
<img height=1 src=images/2.png width=180 border=0></td></tr></tbody></table><table cellspacing=0 cellpadding=0 border=0><tbody><tr> 
<td class=ct valign=top width=7 height=13> <img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top COLSPAN="3" height=13>Uso 
do banco</td><td class=ct valign=top height=13 width=7> <img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=83 height=13>Carteira</td><td class=ct valign=top height=13 width=7> 
<img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=53 height=13>Esp�cie</td><td class=ct valign=top height=13 width=7> 
<img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=123 height=13>Quantidade</td><td class=ct valign=top height=13 width=7> 
<img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=72 height=13> 
Valor Documento</td><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=180 height=13>(=) 
Valor documento</td></tr><tr> <td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td valign=top class=cp height=12 COLSPAN="3"><div align=left> 
 </div></td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=83> 
<div align=left> <span class="campo">
  <?php echo $dadosboleto["carteira"]?>
</span></div></td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=53><div align=left><span class="campo">
<?php echo $dadosboleto["especie"]?>
</span> 
 </div></td><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=123><span class="campo">
 <?php echo $dadosboleto["quantidade"]?>
 </span> 
 </td>
 <td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top  width=72> 
   <span class="campo">
   <?php echo $dadosboleto["valor_unitario"]?>
   </span></td>
 <td class=cp valign=top width=7 height=12> <img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top align=right width=180 height=12> 
   <span class="campo">
   <?php echo $dadosboleto["valor_boleto"]?>
   </span></td>
</tr><tr><td valign=top width=7 height=1> <img height=1 src=images/2.png width=7 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=75 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=31 height=1><img height=1 src=images/2.png width=31 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=83 height=1><img height=1 src=images/2.png width=83 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=53 height=1><img height=1 src=images/2.png width=53 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=123 height=1><img height=1 src=images/2.png width=123 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=72 height=1><img height=1 src=images/2.png width=72 border=0></td><td valign=top width=7 height=1> 
<img height=1 src=images/2.png width=7 border=0></td><td valign=top width=180 height=1><img height=1 src=images/2.png width=180 border=0></td></tr></tbody> 
</table><table width=666 height="0" border=0 cellpadding=0 cellspacing=0><tbody><tr><td align=right width=10 height="100%"> 
<table height="100%" border=0 align=left cellpadding=0 cellspacing=0><tbody><tr><td width=7 align="left" valign=top class=ct><img height=90 src=images/2.png width=1 border=0></td></tr>
</tbody></table></td>
      <td valign=top width=468><font class=ct>Instru��es 
        (Texto de responsabilidade do cedente)</font><br><span class=cp> <FONT class=campo>
  <?php echo $dadosboleto["instrucoes1"]; ?><br>
  <?php echo $dadosboleto["instrucoes2"]; ?><br>
  <?php echo $dadosboleto["instrucoes3"]; ?><br>
  <?php echo $dadosboleto["instrucoes4"]; ?></FONT></span></td>
      <td width=188 height="0" align=right>&nbsp;</td></tr></tbody></table>
<table cellspacing=0 cellpadding=0 width=666 border=0><tbody><tr><td valign=top width=666 height=1><img height=1 src=images/2.png width=666 border=0></td></tr></tbody></table><table width="666" border=0 cellpadding=0 cellspacing=0>
  <tbody><tr><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=659 height=13 style='padding-left:7px'>Sacado</td></tr>
  <tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=659 height=12 style='padding-left:7px'><span class="campo">
<?php echo $dadosboleto["sacado"]?>
</span> 
</td>
</tr></tbody></table><table width="666" border=0 cellpadding=0 cellspacing=0>
  <tbody><tr><td class=cp valign=top width=7 height=12><img height=12 src=images/1.png width=1 border=0></td><td class=cp valign=top width=659 height=12 style='padding-left:7px'><span class="campo">
<?php echo $dadosboleto["endereco1"]?>
</span> 
</td>
</tr></tbody></table><table width="666" border=0 cellpadding=0 cellspacing=0>
  <tbody>
    <tr>
      <td class=ct valign=top height=13><img height=13 src=images/1.png width=1 border=0></td>
      <td height=13 colspan="3" valign=top class=cp style='padding-left:7px'><span class="campo"><?php echo $dadosboleto["endereco2"]?></span></td>
    </tr>
    <tr><td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td>
    <td class=cp valign=top width=472 height=13 style='padding-left:7px'>BOLETO GERADO PELA INTERNET</td>
<td class=ct valign=top width=7 height=13><img height=13 src=images/1.png width=1 border=0></td><td class=ct valign=top width=180 height=13>C�d. 
baixa</td></tr><tr><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=472 height=1><img height=1 src=images/2.png width=472 border=0></td><td valign=top width=7 height=1><img height=1 src=images/2.png width=7 border=0></td><td valign=top width=180 height=1><img height=1 src=images/2.png width=180 border=0></td></tr></tbody></table>
<TABLE cellSpacing=0 cellPadding=0 border=0 width=666><TBODY><TR><TD class=ct  width=7 height=12></TD><TD class=ct  width=409 >Sacador/Avalista</TD><TD class=ct  width=250 ><div align=right>Autentica��o 
mec�nica - <b class=cp>Ficha de Compensa��o</b></div></TD></TR><TR><TD class=ct  colspan=3 ></TD></tr></tbody></table><TABLE cellSpacing=0 cellPadding=0 width=666 border=0><TBODY><TR><TD vAlign=bottom align=left height=50><?php fbarcode($dadosboleto["codigo_barras"]); ?> 
 </TD>
</tr></tbody></table><TABLE cellSpacing=0 cellPadding=0 width=666 border=0><TR><TD class=ct width=666></TD></TR><TBODY><TR><TD class=ct width=666><div align=right>Corte 
na linha pontilhada&nbsp; </div></TD></TR><TR><TD class=ct width=666><img height=1 src=images/6.png width=665 border=0></TD></tr></tbody></table>
</BODY></HTML>
