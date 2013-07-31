jQuery(document).ready(function() {
    if (delibera.situation == 'validacao') {
        // controla os botões para aprovar ou rejeitar a entrada de uma pauta para discussao
        jQuery('#painel_validacao .btn').click(function() {
            if (jQuery(this).hasClass('btn-success')) {
                jQuery('#delibera_validacao').val('S');
            } else {
                jQuery('#delibera_validacao').val('N');
            }
        });
    }
    
    if (delibera.situation == 'emvotacao') {
        // ajusta o estilo do botão de votação dos encaminhamentos de uma pauta
        jQuery('.encaminhamentos .submit #submit').addClass('btn btn-success');
    }
    
    if (delibera.situation == 'comresolucao') {
        jQuery('.comentario_coluna2').hide();
    }
});