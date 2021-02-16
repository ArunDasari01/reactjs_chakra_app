import { useQuery } from "react-query";
import { axios } from "../../lib";

async function fetchHomePageData() {
  const [
    slides,
    topDeals,
    featuredCategories,
    departments,
    productSearches,
  ] = await Promise.all([
    axios.get("/api/consumer/web-home-slider"),
    axios.get("/api/consumer/prd-sales-deals-list"),
    axios.get("/api/consumer/prd-sales-featured-categories-list"),
    axios.get("/api/consumer/prd-sales-department-list"),
    axios.get("/api/consumer/prd-sales-previous-search-list"),
  ]);

  // axios.get("/api/consumer/web-home-slider")
  // ----sales slides -----
  // const slides = {
  //   data: {
  //       "api_oparams": {},
  //       "api_status": {
  //           "status": "Success",
  //           "message": "Home slider details fetched successfully"
  //       },
  //       "sproc_oparams": {
  //           "oparam_err_flag": 0,
  //           "oparam_err_step": null,
  //           "oparam_err_msg": null
  //       },
  //       "home_slider_details": [
  //           {
  //               "caption": "Flower Delivery Online in India From Tansy Boque - Indias Leading Online Florist",
  //               "doc_entity_id": 7,
  //               "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/caption-image/15-0-31-1-1.jpeg"
  //           }
  //       ]
  //   }
  // }
  
  // axios.get("/api/consumer/prd-sales-deals-list"),
  // const topDeals = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Product sales deals list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "product_list": [{"product_name": "Blooming Love", "product_type": "Roses", "description": "Red is the color of love. Celebrate the onset of love with our charming bouquet of 10 Red Roses wrapped in cellophane aptly conveying your feelings.", "actual_price": 250.0, "discount_price": 75.0, "discount_percent": "Upto 15.00% discount", "deal_price": 175.0, "product_entity_id": 101, "doc_entity_id": 8, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/101-0-37-1-1.jpeg"}, {"product_name": "Dark Pink Fantasy", "product_type": "Flowers in Box", "description": "Dream of making a special occasion even more celebration-worthy? Choose our The Dark Pink Treasure Square Bouquet Box to add grace to any simple occasion. Our set of freshly picked 30 dark pink roses in a beautiful lime green box come tied with a black ribbon around it.", "actual_price": 1700.0, "discount_price": 50.0, "discount_percent": "Upto 15.00% discount", "deal_price": 1650.0, "product_entity_id": 111, "doc_entity_id": 11, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/111-0-37-1-1.jpeg"}, {"product_name": "100 Pink Roses", "product_type": "Premium Flowers", "description": "Make someone feel beautiful with the blush of these beautiful Pink Flowers. Gift them this bunch of 100 Pink Roses, carefully wrapped in Jute and sealed with a Pink Bow of magic.", "actual_price": 3500.0, "discount_price": 60.0, "discount_percent": "Upto 20.00% discount", "deal_price": 3440.0, "product_entity_id": 115, "doc_entity_id": 9, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/115-0-37-1-1.jpeg"}, {"product_name": "Golden Luxury Box Bouquet", "product_type": "Premium Flowers", "description": "All you need is this luxurious Golden box bouquet by MyFlowerTree to profess your love for your precious ones. It consists of red roses which represent love put together with white roses which represent purity. Therefore, it makes an ideal gift for special occasions like birthdays and anniversaries ", "actual_price": 5000.0, "discount_price": 30.0, "discount_percent": "Upto 25.00% discount", "deal_price": 4970.0, "product_entity_id": 114, "doc_entity_id": 10, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/114-0-37-1-1.jpeg"}]}
  // }

  // axios.get("/api/consumer/prd-sales-featured-categories-list"),
  // const featuredCategories = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Product sales category list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "product_list": [{"product_category_id": 2, "product_category": "Cakes", "description": "check out the best in the cakes", "doc_entity_id": 6, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/2-0-44-1-1.jpeg"}, {"product_category_id": 3, "product_category": "Combos", "description": "check out the best in the Combos", "doc_entity_id": 5, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/3-0-44-1-1.jpeg"}, {"product_category_id": 1, "product_category": "Flowers", "description": "check out the best in the flowers", "doc_entity_id": 4, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/1-0-44-1-1.jpeg"}, {"product_category_id": 4, "product_category": "Personalised Gifts", "description": "check out the best in the Personalised Gifts", "doc_entity_id": 3, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/4-0-44-1-1.jpeg"}, {"product_category_id": 5, "product_category": "Plants", "description": "check out the best in the Plants", "doc_entity_id": 2, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/5-0-44-1-1.jpeg"}, {"product_category_id": 7, "product_category": "Sameday Delivery Gifts", "description": "check out the best in the Sameday Delivery Gifts", "doc_entity_id": 1, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/7-0-44-1-1.jpeg"}]}
  // }

  // axios.get("/api/consumer/prd-sales-department-list"),
  // const departments = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Product sales department list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "product_department_list": [{"product_department_id": 1, "product_department": "Original Floral Designs"}, {"product_department_id": 2, "product_department": "Unique Containers"}, {"product_department_id": 3, "product_department": "Green and Flowering House Plants"}], "product_department_category_list": [{"product_department_id": 1, "parent_product_category_id": 1, "product_category": "Flowers", "doc_entity_id": 4, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/1-0-44-1-1.jpeg"}, {"product_department_id": 1, "parent_product_category_id": 2, "product_category": "Cakes", "doc_entity_id": 6, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/2-0-44-1-1.jpeg"}, {"product_department_id": 1, "parent_product_category_id": 2, "product_category": "Cakes", "doc_entity_id": 6, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/2-0-44-1-1.jpeg"}, {"product_department_id": 1, "parent_product_category_id": 3, "product_category": "Combos", "doc_entity_id": 5, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/3-0-44-1-1.jpeg"}, {"product_department_id": 2, "parent_product_category_id": 1, "product_category": "Flowers", "doc_entity_id": 4, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/1-0-44-1-1.jpeg"}, {"product_department_id": 2, "parent_product_category_id": 3, "product_category": "Combos", "doc_entity_id": 5, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/3-0-44-1-1.jpeg"}, {"product_department_id": 2, "parent_product_category_id": 7, "product_category": "Sameday Delivery Gifts", "doc_entity_id": 1, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/7-0-44-1-1.jpeg"}, {"product_department_id": 3, "parent_product_category_id": 2, "product_category": "Cakes", "doc_entity_id": 6, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/2-0-44-1-1.jpeg"}, {"product_department_id": 3, "parent_product_category_id": 3, "product_category": "Combos", "doc_entity_id": 5, "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/product-category-image/3-0-44-1-1.jpeg"}]}
  // }
  
  // axios.get("/api/consumer/prd-sales-previous-search-list"),
  // const productSearches = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Previous search list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "product_list": [{"product_name": "12 Dozen Roses", "actual_price": "2500", "discount_price": "2000", "discount": "11%", "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/101-0-37-1-1.jpeg"}, {"product_name": "24 Pink Roses", "actual_price": "2500", "discount_price": "2000", "discount": "11%", "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/111-0-37-1-1.jpeg"}, {"product_name": "12 Dozen Pink Roses ", "actual_price": "10500", "discount_price": "7000", "discount": "11%", "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/114-0-37-1-1.jpeg"}, {"product_name": "Roses with Cake", "actual_price": "12500", "discount_price": "10000", "discount": "10%", "s3_path": "https://dev-sls-tansy-super-flowers-web.s3.amazonaws.com/Product-Image/thumbnail/115-0-37-1-1.jpeg"}]}
  // }

  return {
    slides: slides.data.home_slider_details,
    topDeals: topDeals.data.product_list,
    featuredCategories: featuredCategories.data.product_list,
    departments: departments.data.product_department_list.map((dept) => {
      return {
        id: dept.product_department_id,
        name: dept.product_department,
        categories: departments.data.product_department_category_list
          .filter(
            (cat) => cat.product_department_id === dept.product_department_id
          )
          .map((cat) => ({
            parentId: cat.parent_product_category_id,
            departmentId: cat.product_department_id,
            name: cat.product_category,
            image: cat.s3_path,
          })),
      };
    }),
    productSearches: productSearches.data.product_list,
  };
}

export default function useSalesHome() {
  return useQuery("useSalesHome", fetchHomePageData, {
    staleTime: Infinity,
  });
}
