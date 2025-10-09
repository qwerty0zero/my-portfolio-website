<script setup >

</script>

<template>
  <div>
    <svg>
      <filter id="noise">
        <feTurbulence>
          <animate attributeName="baseFrequency" dur="50s" values="0.9 0.9; 0.8 0.8; 0.9 0.9;"
                   repeatCount="indefinite">

          </animate>
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="5">

        </feDisplacementMap>
      </filter>
    </svg>

  </div>

</template>

<style scoped>
div{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(#111, #111 50%, #fff 50%, #fff);
  background-size: 5px 5px;
  filter:url(#noise);
  opacity: 0.1;
}
svg{
  width: 0;
  height: 0;
}
</style>