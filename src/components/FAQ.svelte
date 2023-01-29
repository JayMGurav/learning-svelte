<script>
  const faqs = [
    "Do you offer free shipping?",
    "How long do you hold click and collect orders?",
    "What is the delivery time of my order?",
    "Can I create a return on my delivery app?",
    "I don't see the ASDA option at checkout?",
    "My local store is closed due to lockdown - how do I return my item?"
  ] 
</script>

<div>
  <div class="faq_title">
    Frequently <span>Asked Questions</span>
  </div>
  <ul>
    {#each faqs as question}
      <li>{question}</li>
    {/each}
  </ul>
</div>


<style>
  div {
    margin-top: 2.5rem;
    padding: 0.5rem;
    background: white;
    border-radius: 8px;
  }
  .faq_title {
    margin: 0%;
    padding: 1rem;
    background: #eee;
    font-size: x-large;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
  }
  .faq_title > span {
    color: rgb(0, 130, 195);
  }

  ul {
    list-style-type: none;
    padding: 0%;
  }

  li {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }
</style>