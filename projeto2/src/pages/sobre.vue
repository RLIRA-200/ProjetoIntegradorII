<template>
<div class="container">
   <div class="textos"> <h1>Sobre a loja</h1>
    <p>A empresa Ceará calçados, fundada por Francisco das Chagas, começou com um pequeno centro comercial em 2004,
         sob venda de cintos, carteiras e relógios. Em certo ponto de seu desenvolvimento, houve um engrandecimento,
         passando a vender rasteiras, passando a ter um lucro maior para o aprimoramento de seus negócios comercializados,
         o que abriu portas para iniciar sua trajetória de conquistas. No ano de 2007, sua empresa foi aberta com sede em
         Dobrada, na rua Francisco Barbieri, tendo como referencia a Câmara Municipal, onde permaneceu até 2011, 
         para que uma outra loja, com estabelecimento mais amplo, tivesse êxito maior. Atualmente, a empresa mais
         ampla encontra- se em Santa Ernestina, fazendo com que os clientes calcem a moda com estilo, oferecendo o
         melhor ao consumidor.</p>
         </div>
         <img src="../assets/img/loja.png" alt="">
</div>
   

</template>
<script>
export default {
    name:'Sobre'
}
</script>
<style scoped>
.container{

display: flex;
justify-content: space-between;    
}

.textos{
    width: 700px;
    font-size: 1.5rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}
</style>