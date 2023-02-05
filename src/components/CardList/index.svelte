<script>
  import Card from '../Card'

  const data = [
    {
      id: 1,
      title: 'My Account',
      topics: [
        'Create my account',
        'Forgotten password',
        'Communication preferences',
      ],
    },
    {
      id: 2,
      title: 'Return and Warranty ',
      topics: ['Return options', 'Create an online return', 'Refund'],
    },
    {
      id: 3,
      title: 'My Order',
      topics: ['click an collect', 'Cancel my order', 'Track my order'],
    },
    {
      id: 4,
      title: 'Payment',
      topics: ['Payment options', 'When do I get charged', 'Payment declined'],
    },
    {
      id: 5,
      title: 'Stores and Services',
      topics: ['Contact my store', 'Collect from my store', 'Find my store'],
    },
    {
      id: 6,
      title: 'Business Accounts',
      topics: ['Business Account', 'Bulk Order', 'Personalize clothing'],
    },
    {
      id: 7,
      title: 'Marketplace and Decathlon partners',
      topics: [
        "What's MarketPlace?",
        'How to return MarketPlace orders',
        'Marketplace 10 Partner Returns',
        'MarketPlace returns policy',
      ],
    },
    {
      id: 8,
      title: 'Gift cards',
      topics: [
        'Where to use gift cards',
        'Can I Personalize my gift card?',
        'Gift Card for others',
      ],
    },
  ]
</script>

<div role="list" aria-label="categories">
  {#each data as category (category.id)}
    <Card {category} />
  {/each}
</div>

<style>
  div {
    padding: 0%;
    margin: 0%;
    margin-top: 1rem;
    display: grid;
    grid-gap: 2ch;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
</style>
