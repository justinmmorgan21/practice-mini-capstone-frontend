export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name"></input><br />
        <label htmlFor="description">Description: </label>
        <textarea type="text" id="description" name="description" rows="3"></textarea><br />
        <label htmlFor="price">Price: </label>
        <input type="text" id="price" name="price"></input><br />
        <label htmlFor="image_url">Image_url: </label>
        <input type="text" id="image_url" name="image_url"></input><br />
        <button type="submit" id="submit" name="submit">Submit</button>
      </form>
    </div>
  );
}
