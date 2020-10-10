colors = new Array('#d5555f', '#e1757f', '#8e272f');

function annoyingEffect(tic){
    tic %= colors.length;
    document.bgColor = colors[tic];
    setTimeout("annoyingEffect("+(tic+1)+")", 3000);
}

function annoyingEffectOnDiv(tic, divId){
    tic %= colors.length;
    divVar = document.getElementById(divId);
    divVar.style.background = colors[tic];
    setTimeout("annoyingEffectOnDiv("+(tic+1)+", '"+divId+"')", 3000);
}
