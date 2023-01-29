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
  <div class="card_footer">
    View all
  </div>
</div>
</div>


<style>
  .card {
    position: relative;
    height: 220px;
    flex: 1 0 31%;
    background: white;
    border-radius: 10px;
    font-size: 14px;
  }
  .card:nth-last-of-type(1),.card:nth-last-of-type(2) {
    flex: 0 0 32%;
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
    position: absolute;
    bottom: 0;
    left:0;
    text-transform: uppercase; 
    font-weight: 500;
    padding: 1rem;
    color: rgb(0, 130, 195);
    background-color: inherit;
  }
</style>