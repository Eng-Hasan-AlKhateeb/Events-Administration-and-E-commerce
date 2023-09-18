document.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get(
        `http://localhost:3000/api/v1/wishlist`
      );

      const blogsResponse = await axios.get("http://localhost:3000/api/v1/blogs");
      const blogs = blogsResponse.data.blogs;
      const products = blogsResponse.data.products;

      const favBlogs = response.data.favBlogs.find(item = blogs.map(b => b._id))
      const favProducts = response.data.favProducts.find(item = products.map(b => b._id))
  
      document.getElementById('fav-blog-body').innerHTML = favBlogs.map(blog => `
      <tr>
        <td class="product-name" style="text-align: right; font-size: 20px;">
            <h4 class="no-margin"><a href="#">${blog.title}</a></h4>
        </td>
        <td class="product-thumbnail text-center">
            <a href="#"><img src="images/3.jpg" alt="" title="" /></a>
        </td>
        <td class="product-remove text-center" valign="middle"><i id='remove-blog-btn' data-remove-id="${blog._id}" class="icon icon anm anm-times-l"></i></td>
        </tr>
      `)

      document
      .getElementById("remove-blog-btn")
      .addEventListener("click", (event) => {
        if (event.target.matches("[data-remove-id]")) {
          const id = event.target.getAttribute("data-remove-id");
          axios.delete(`http://localhost:3000/api/v1/wishlist/blogs/${id}`);
        }
      });

  
      document.getElementById('products-body').innerHTML = favProducts.map(product => `
      <tr>
      <td class="product-subtotal text-center"><button type="button" class="btn btn-small">أضف للسلة</button></td>

      <td class="product-price text-center"><span class="amount">$165.00</span></td>
      <td class="product-name" style="text-align: right;">
          <h4 class="no-margin"><a href="#">${product.name}</a></h4>
      </td>
      <td class="product-thumbnail text-center">
          <a href="#"><img src="images/c5.jpg" alt="" title="" /></a>
      </td>
      <td class="product-remove text-center" valign="middle"><i  id='remove-product-btn' data-remove-product-id="${product._id} class="icon icon anm anm-times-l"></i></td>
  </tr>
      `)

      document
      .getElementById("remove-product-btn")
      .addEventListener("click", (event) => {
        if (event.target.matches("[data-remove-product-id]")) {
          const id = event.target.getAttribute("data-remove-product-id");
          axios.delete(`http://localhost:3000/api/v1/wishlist/products/${id}`);
        }
      });

})