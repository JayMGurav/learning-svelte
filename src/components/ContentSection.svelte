<script>
  import SearchBox from "./SearchBox.svelte";
  import CardList from "./CardList";
  import FAQ from "./FAQ";
  import ContactInfo from "./ContactInfo";




</script>

<section>
  <main>
    <SearchBox />
    <CardList/>
    <FAQ/>
  </main>
  <aside>
    <ContactInfo/>
  </aside>
</section>


<style>
  section{
    padding: 1rem calc((100% - 1200px) / 2);
    margin: auto;
    display: flex;
    gap: 1ch;
    flex-wrap: wrap;
  }

  main{
    margin: 1rem;
    flex: 1 1 70%;
    display: flex;
    flex-direction: column;
    gap:2ch;
  }

  aside{
    margin: 1rem;
    flex: 1 1 200px;
  }


</style>