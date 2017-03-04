<template id="lawyer-template">

    <div id="lawyer-list">
        {{title}}

    </div>

</template>

<script type="text/ecmascript-6">

  Vue.component('app-header', {
    template: '#lawyer-list',
    data: {
      title: '我是頭部'
    }
  })

</script>
    
