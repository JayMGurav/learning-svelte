<script>
  export let category;
</script>

<div class="card">
  <div class="card_header">
    {category.title}
  </div>
  <div class="card_content">
  <ul>
    {#each category.topics as topic, i}
      <li>{topic}</li>
    {/each}
  </ul>
</div>
  <div class="card_footer">
    View all
  </div>
</div>


<style>
  .card {
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }

  .card_content {
    flex: 1;
  }


 .card_header {
    background: rgb(0, 130, 195);
    border-radius: 10px 10px 0 0;
    padding: 1rem;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
  }

  ul {
    padding: 0rem 1.5rem;
  }
  li {
    line-height: 1.5rem;
    text-transform: capitalize;
  }

  .card_footer {
    margin-top: auto;
    text-transform: uppercase; 
    font-weight: 500;
    padding: 1rem;
    color: rgb(0, 130, 195);
  } 
</style>