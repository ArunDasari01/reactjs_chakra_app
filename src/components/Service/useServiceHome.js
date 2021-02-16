import { useQuery } from "react-query";
import { axios } from "../../lib";

async function fetchHomePageData() {
  const [
    slides,
    topFeatures,
    testimonials,
    featuredProducts,
  ] = await Promise.all([
    axios.get("/api/consumer/web-home-slider"),
    axios.get("/api/consumer/org-service-highlights-list"),
    axios.get("/api/consumer/org-testimonial-list"),
    axios.get("/api/consumer/product-featured-list"),
  ]);
  //--------------- axios.get("/api/consumer/web-home-slider")-----------
  // ------service slides-----
  // const slides = {
  //   data:{
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
  //               "caption": "What we do here is not serve you,we make a NEW YOU",
  //               "doc_entity_id": 1,
  //               "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/caption-image/15-0-31-1-1.png"
  //           }
  //       ]
  //   }
  // }

  // axios.get("/api/consumer/org-service-highlights-list")
  // const topFeatures = {
  //   data:{
  //     "api_oparams": {}, 
  //     "api_status": {
  //       "status": "Success", 
  //       "message": "Service highlights list fetched successfully"
  //     }, 
  //     "sproc_oparams": {
  //       "oparam_err_flag": 0, 
  //       "oparam_err_step": null, 
  //       "oparam_err_msg": null
  //     }, 
  //     "service_highlights_list": [
  //       {
  //         "header_html_text": "Hygiene Environments", 
  //         "description_html_text": "Our employees always take care of the surroundings with fully santized arrangements and always on face masks.", 
  //         "highlights_sequence": 1, 
  //         "doc_entity_id": 20, 
  //         "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/top-features/thumbnail/15-0-41-1-1.png"
  //       }, 
  //       {
  //         "header_html_text": "Covid-free Staff", 
  //         "description_html_text": "Make sure your workplaces are clean and hygienic, Surfaces (e.g. desks and tables) and objects (e.g. telephones, keyboards) need to be wiped\nwith disinfectant regularly", 
  //         "highlights_sequence": 2, 
  //         "doc_entity_id": 21, 
  //         "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/top-features/thumbnail/15-0-41-2-1.png"
  //       }, 
  //       {"header_html_text": "Genuine Products", 
  //       "description_html_text": "A brand that has values and morals and stands by them no matter what while honestly divulging its practices (flaws and all). In fact, the thing people most wanted was open and honest communications about products and services. And that finding was consistent around the world.",
  //        "highlights_sequence": 3,
  //         "doc_entity_id": 22, 
  //         "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/top-features/thumbnail/15-0-41-3-1.png"
  //       }]
  //     }
  //   }

  
  // axios.get("/api/consumer/org-testimonial-list"),
  // const testimonials = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Testimonial list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "testimonial_list": [{"testimonial_id": 1, "testimonial_title": "Mind Blowing", "testimonial_text": " I have been struggling with hair stylists that are not passionate with their art for many, many years. These ladies are amazing. I became part of their art", "consumer_name": "Ali", "doc_entity_id": 15, "consumer_entity_id": 1, "s3_link_response": "https://s3.amazonaws.com/dev-srv-tansy-super-saloon/consumer-image/thumbnail/1-0-40-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=zAkOVUEiLJazmLb%2BhK%2BNWx96yxU%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471020"}, {"testimonial_id": 2, "testimonial_title": "Passionate", "testimonial_text": "Got the best haircut I\u2019ve ever had with Tansy! I have VERY thick hair and it\u2019s very hard to manage and he thinned it well and was precise with how much hair I asked him to cut. Definitely going back!", "consumer_name": "Salman", "doc_entity_id": 16, "consumer_entity_id": 2, "s3_link_response": "https://s3.amazonaws.com/dev-srv-tansy-super-saloon/consumer-image/thumbnail/2-0-40-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=b%2BQFACqQRg77NC1WUgg8EEo3Ko8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471020"}, {"testimonial_id": 3, "testimonial_title": "Very professional", "testimonial_text": " I can\u2019t speak highly enough of this salon. Tansy is the definition of perfection when it comes to haircutting and coloring. I\u2019ve been getting compliments daily as a result of his work!", "consumer_name": "Mohammed", "doc_entity_id": 17, "consumer_entity_id": 3, "s3_link_response": "https://s3.amazonaws.com/dev-srv-tansy-super-saloon/consumer-image/thumbnail/3-0-40-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=ZPERqDPQlakc8oAH9vpz8O4lzYI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471020"}, {"testimonial_id": 4, "testimonial_title": " Best salon ever", "testimonial_text": "Ever stylist here is talented, and the service is impeccable. Plus, it\u2019s incredibly affordable by (City) standards. Have been going here for years, and have never been disappointed.", "consumer_name": "Kohli", "doc_entity_id": 18, "consumer_entity_id": 4, "s3_link_response": "https://s3.amazonaws.com/dev-srv-tansy-super-saloon/consumer-image/thumbnail/4-0-40-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=WZHqkafPUgHV73Mu77n190YM8Uo%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471020"}, {"testimonial_id": 5, "testimonial_title": "Superb Salon", "testimonial_text": "Tansy did my hair and I loved it. She was awesome, polite and sweet. Did my hair exactly the way I wanted. I will definitely go back to her again.", "consumer_name": "Jane", "doc_entity_id": 19, "consumer_entity_id": 5, "s3_link_response": "https://s3.amazonaws.com/dev-srv-tansy-super-saloon/consumer-image/thumbnail/5-0-40-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=gd9pJ2Nz3JTyrmcOknmZRhhq6DQ%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471020"}]}
  // }

  // axios.get("/api/consumer/product-featured-list"),
  // const featuredProducts = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Product featured list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "product_featured_list": [{"product_name": "Upstyles - Braids", "description": "Add A Hint Of Glamour To Your Evening Look With Our Range Of Upstyles . Now Try A New Hairstyle Everyday", "regular_price": 1250.0, "reduced_price": 625.0, "product_entity_id": 103, "doc_entity_id": 11, "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/Product-Image/thumbnail/103-0-39-1-1.jpeg"}, {"product_name": "Hair Styling- Women", "description": "Be A Cut Above The Rest With Our Wide Range Of Stylish Haircuts. Trendy And Glam, Its Time To Show-Stop Everyday.", "regular_price": 3000.0, "reduced_price": 1500.0, "product_entity_id": 104, "doc_entity_id": 12, "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/Product-Image/thumbnail/104-0-39-1-1.jpeg"}, {"product_name": "Upstyles - Formal Hair Styling", "description": "Add A Hint Of Glamour To Your Evening Look With Our Range Of Upstyles . Now Try A New Hairstyle Everyday", "regular_price": 1500.0, "reduced_price": 1200.0, "product_entity_id": 105, "doc_entity_id": 13, "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/Product-Image/thumbnail/105-0-39-1-1.jpeg"}, {"product_name": "Natural Global Hair Coloring- Men", "description": "Dress Up Your Hair With Some Awesome Hues And Shades To Look Ramp Ready.", "regular_price": 3000.0, "reduced_price": 1500.0, "product_entity_id": 106, "doc_entity_id": 14, "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/Product-Image/thumbnail/106-0-39-1-1.jpeg"}]}
  // }

  return {
    slides: slides.data.home_slider_details,
    topFeatures: topFeatures.data.service_highlights_list.map((highlight) => ({
      description: highlight["description_html_text"],
      image: highlight["s3_path"],
      title: highlight["header_html_text"],
    })),
    testimonials: testimonials.data.testimonial_list,
    featuredProducts: featuredProducts.data.product_featured_list.map(
      (product) => ({
        id: product["product_entity_id"],
        description: product["description"],
        image: product["s3_path"],
        title: product["product_name"],
        price: product["regular_price"],
        discountedPrice: product["reduced_price"],
      })
    ),
  };
}


export default function useServiceHome() {
  return useQuery("useServiceHome", fetchHomePageData, { staleTime: Infinity });
}
