"use client";

import { useEffect, useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";

const zohoFormHTML = `
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm" style="color: black;max-width: 600px;">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<META HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<style>
  .wf_customMessageBox{
    font-family: Arial, Helvetica, sans-serif;
    color: #132C14;
    background: #F5FAF5;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.25);
    max-width: 90%;
    width: max-content;
    word-break: break-word;
    z-index: 11000;
    border-radius: 6px;
    border: 1px solid #A9D3AB;
    min-width: 100px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .wf_customCircle{
    position: relative;
    background-color: #12AA67;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    flex: none;
    margin-right: 7px;
  }
  .wf_customCheckMark{
    box-sizing: unset !important;
    position: absolute;
    transform: rotate(45deg)translate(-50%, -50%);
    left: 6px;
    top: 9px;
    height: 8px;
    width: 3px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
  }
  .wf_customClose{
    box-sizing: border-box;
    position: relative;
    width: 18px;
    height: 18px;
  }
  .wf_customClose::after,
  .wf_customClose::before{
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 1.5px;
    background: #616E88;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px }
  .wf_customClose::after{
    transform: rotate(-45deg)}
</style>
<div class="wf_customMessageBox" id="wf_splash" style="display:none">
  <div class="wf_customCircle">
    <div class="wf_customCheckMark"></div>
  </div>
  <span id="wf_splash_info"></span>
</div>
<form id="webform991537000000620002" name="WebToLeads991537000000620002" accept-charset="UTF-8">
  <input type="text" style="display:none;" name="xnQsjsdp" value="f63cd61f4e7269a852d564f6e5e4a78177d2adff34557ec14a7351e86d1b06ca" />
  <input type="hidden" name="zc_gad" id="zc_gad" value="" />
  <input type="text" style="display:none;" name="xmIwtLD" value="df8d4969099d4280558609071b9cf594b09d200faa34c2b4005cbd3f3f58e40715f5e95839dfa9b4c2af0c20b0e174ab" />
  <input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
  <input type="text" style="display:none;" name="returnURL" value="null" />
  <input type="text" type="hidden" style="display: none;" name="aG9uZXlwb3Q" value="" />
  <style>
    .zcwf_lblLeft .zcwf_col_fld input[type=text], .zcwf_lblLeft .zcwf_col_fld textarea{
      width: 100%;
      border: 1px solid #c0c6cc !important;
      resize: vertical;
      border-radius: 2px;
      float: left;
    }
    .zcwf_lblLeft .zcwf_col_lab{
      width: 30%;
      word-break: break-word;
      padding: 0px 6px 0px;
      margin-right: 10px;
      margin-top: 5px;
      float: left;
      min-height: 1px;
    }
    .zcwf_lblLeft .zcwf_col_fld{
      float: left;
      width: 68%;
      padding: 0px 6px 0px;
      position: relative;
      margin-top: 5px;
    }
    .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after{
      content: '';
      display: table;
      clear: both;
    }
    .zcwf_lblLeft .zcwf_row{
      margin: 15px 0px;
    }
    .zcwf_lblLeft .formsubmit{
      margin-right: 5px;
      cursor: pointer;
      color: #313949;
      font-size: 12px;
    }
    .zcwf_lblLeft .zcwf_button{
      font-size: 12px;
      color: #313949;
      border: 1px solid #c0c6cc;
      padding: 3px 9px;
      border-radius: 4px;
      cursor: pointer;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .zcwf_lblLeft .zcwf_col_help{
      float: left;
      margin-left: 7px;
      font-size: 12px;
      max-width: 35%;
      word-break: break-word;
    }
    .cBoth:after{
      content: '';
      display: block;
      clear: both;
    }
    @media all and (max-width: 600px){
      .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld{
        width: auto;
        float: none !important;
      }
      .zcwf_lblLeft .zcwf_col_help{
        width: 40%;
      }
    }
  </style>
  <div class="zcwf_row">
    <div class="zcwf_col_lab" style="font-size:14px; font-family: Arial;">
      <label for="First_Name">Nombre <span style="color:red;">*</span></label>
    </div>
    <div class="zcwf_col_fld">
      <input type="text" id="First_Name" aria-required="true" aria-label="First Name" name="First Name" aria-valuemax="40" maxlength="40" />
      <div class="zcwf_col_help"></div>
    </div>
  </div>
  <div class="zcwf_row">
    <div class="zcwf_col_lab" style="font-size:14px; font-family: Arial;">
      <label for="Last_Name">Apellidos <span style="color:red;">*</span></label>
    </div>
    <div class="zcwf_col_fld">
      <input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" aria-valuemax="80" maxlength="80" />
      <div class="zcwf_col_help"></div>
    </div>
  </div>
  <div class="zcwf_row">
    <div class="zcwf_col_lab" style="font-size:14px; font-family: Arial;">
      <label for="Email">Correo electrónico <span style="color:red;">*</span></label>
    </div>
    <div class="zcwf_col_fld">
      <input type="text" ftype="email" autocomplete="false" id="Email" aria-required="true" aria-label="Email" name="Email" aria-valuemax="100" crmlabel="" maxlength="100" />
      <div class="zcwf_col_help"></div>
    </div>
  </div>
  <div class="zcwf_row">
    <div class="zcwf_col_lab" style="font-size:14px; font-family: Arial;">
      <label for="Mobile">Móvil</label>
    </div>
    <div class="zcwf_col_fld">
      <input type="text" id="Mobile" aria-required="false" aria-label="Mobile" name="Mobile" aria-valuemax="30" maxlength="30" />
      <div class="zcwf_col_help"></div>
    </div>
  </div>
  <div class="zcwf_row">
    <div class="zcwf_col_lab" style="font-size:14px; font-family: Arial;">
      <label for="Description">Mensaje <span style="color:red;">*</span></label>
    </div>
    <div class="zcwf_col_fld">
      <textarea style="font-family: Arial, sans-serif;" aria-multiline="true" id="Description" aria-required="true" aria-label="Description" name="Description"></textarea>
      <div class="zcwf_col_help"></div>
    </div>
  </div>
  <div class="zcwf_row">
    <div class="zcwf_col_lab"></div>
    <div class="zcwf_col_fld">
      <input type="submit" id="formsubmit" role="button" class="formsubmit zcwf_button" value="Enviar" aria-label="Enviar" title="Enviar" />
      <input type="reset" class="zcwf_button" role="button" name="reset" value="Restablecer" aria-label="Restablecer" title="Restablecer" />
    </div>
  </div>
  <script>
    function validateEmail991537000000620002(){
      var form = document.forms['WebToLeads991537000000620002'];
      var emailFld = form.querySelectorAll('[ftype=email]');
      var i;
      for(i = 0; i < emailFld.length; i++ ) {
        var emailVal = emailFld[i].value;
        if ((emailVal.replace(/^\s+|\s+$/g,'')).length != 0) {
          var atpos = emailVal.indexOf('@');
          var dotpos = emailVal.lastIndexOf('.');
          if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Introduzca una dirección de correo electrónico válida. ');
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    }
    function checkMandatory991537000000620002(){
      var mndFileds = new Array('First Name', 'Last Name', 'Email', 'Description');
      var fldLangVal = new Array('Nombre', 'Apellidos', 'Correo electrónico', 'Mensaje');
      for (i = 0; i < mndFileds.length; i++ ) {
        var fieldObj = document.forms['WebToLeads991537000000620002'][mndFileds[i]];
        if (fieldObj) {
          if(((fieldObj.value).replace(/^\s+|\s+$/g,'')).length == 0) {
            if (fieldObj.type == 'file') {
              alert('Seleccione un archivo para cargar.');
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + ' no puede estar vacío.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName == 'SELECT') {
            if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
              alert(fldLangVal[i] + ' no puede ser nulo.');
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type == 'checkbox') {
            if (fieldObj.checked == false) {
              alert('Please accept ' + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
          try{
            if (fieldObj.name == 'Last Name') {
              name = fieldObj.value;
            }
          } catch (e){}
        }
      }
      if (!validateEmail991537000000620002()) {
        return false;
      }
      var urlparams = new URLSearchParams(window.location.search);
      if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
        var webform = document.getElementById('webform991537000000620002');
        var service = urlparams.get('service');
        var smarturlfield = document.createElement('input');
        smarturlfield.setAttribute('type', 'hidden');
        smarturlfield.setAttribute('value', service);
        smarturlfield.setAttribute('name', 'service');
        webform.appendChild(smarturlfield);
      }
      document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      return true;
    }
    $(document).ready(function(){
      $('#webform991537000000620002').submit(function(e){
        var ismandatory = checkMandatory991537000000620002();
        e.preventDefault();
        if (ismandatory) {
          if (typeof _wfa_track != 'undefined' && _wfa_track.wfa_submit) {
            _wfa_track.wfa_submit(e);
          }
          var formData = new FormData(this);
          $.ajax({
            url: 'https://crm.zoho.eu/crm/WebToLeadForm',
            type: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(data){
              var splashinfodom = document.getElementById('wf_splash_info');
              splashinfodom.innerText = data.actionvalue || 'Formulario enviado correctamente';
              var splashdom = document.getElementById('wf_splash');
              document.getElementById('webform991537000000620002').reset();
              splashdom.style.display = '';
              setTimeout(function(){
                splashdom.style.display = 'none';
              }, 5000);
              document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
            },
            error: function(data){
              alert('Se ha producido un error. Inténtalo de nuevo.');
            }
          });
        }
      });
    });
    function tooltipShow991537000000620002(el){
      var tooltip = el.nextElementSibling;
      var tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay == 'none') {
        var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
        for (i = 0; i < allTooltip.length; i++ ) {
          allTooltip[i].style.display = 'none';
        }
        tooltip.style.display = 'block';
      } else {
        tooltip.style.display = 'none';
      }
    }
  </script>
  <script id="wf_anal" src="https://crm.zohopublic.eu/crm/WebFormAnalyticsServeServlet?rid=16750fc4a26b8a289e62f67cb95ff345e329303ed4883b088c37f19c43dc65ec78e7e0adf80837903e3ebffc2b563d90gid53309cf8a4bcf32b9a348908b9bcf2fc0f7ad24d7176164c377fe278d7854f2bgid768bbbd0c7d0498ff54b9e54db033122c1ae73da9f57fa2042b43060a3a5cb05gidb32967c763d2513f12e3f47244ca74ead58a1eba4eb0e371c7456af1f49ba8a6&tw=f59147f882d46b1bec69020aa94e713fc4deb36a9ee37861e6b6dc07aa01f7d3"></script>
</form>
</div>
`;

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar jQuery si no está cargado
    if (!(window as any).jQuery) {
      const script = document.createElement("script");
      script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
      script.onload = () => {
        // jQuery cargado, los scripts inline del HTML ya deberían funcionar
        // Pero necesitamos ejecutar el $(document).ready manualmente
        const $ = (window as any).jQuery;
        if ($) {
          $(document).ready(() => {
            // Trigger manual por si el DOM ya está listo
            $(document).trigger("ready");
          });
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up relative overflow-hidden rounded-3xl bg-[#58521D] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] rounded-full bg-[#D4C97A]/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empieza tu transformación hoy
            </h2>
            <p className="mt-4 text-lg text-white/70">
              La primera consultoría es gratuita y sin compromiso. Hablemos de
              cómo la IA puede impulsar tu negocio.
            </p>

            {/* Formulario Zoho completo */}
            <div
              ref={containerRef}
              className="mt-10 rounded-2xl bg-white p-6 sm:p-8 text-left"
              dangerouslySetInnerHTML={{ __html: zohoFormHTML }}
            />

            {/* Botones alternativos */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@mdialab.com"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-medium bg-[#D4C97A] text-[#2D2A1B] hover:bg-[#C4B96B] transition-colors"
              >
                <Mail className="h-4 w-4" />
                Correo
              </a>
              <a
                href="https://wa.me/34674372040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-medium bg-white text-[#2D2A1B] hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Respuesta en menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
