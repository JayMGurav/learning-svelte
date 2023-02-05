<script>
  import './global.css'
  import Main from './components/Main.svelte'

  let imgSrc =
    'https://custhelp.decathlon.co.uk/euf/assets/themes/standard/images/background.jpg'
</script>

<img src={imgSrc} alt="background" lazy />
<Main />

<style>
  img {
    width: 100%;
    height: auto;
    margin: 0%;
    padding: 0%;
    position: fixed;
    object-fit: fill;
    z-index: 9;
  }
</style>
