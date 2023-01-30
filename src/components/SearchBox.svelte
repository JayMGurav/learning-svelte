<script>
  import { searchValue } from "../store"

  let value = "";
</script>

<div>
  <input 
    type="text" 
    bind:value={value}
    placeholder="SEARCH OR ASK QUESTION"/>
</div>


<style>
  div{
    padding: 0.5rem;
    display: flex;
    background-color: white;
    border-radius: 8px;
  }
  input {
    flex: 1 1 100%;
    padding: 0.75rem;
    font-size: 1.25rem;
    background-color: #eee;
    border-radius: 8px;
    border:none;
  }

  input::placeholder {
    font-style: italic;
    color: rgb(183, 183, 183);
  }

</style>