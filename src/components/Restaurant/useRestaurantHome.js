import { useQuery } from "react-query";
import { axios } from "../../lib";

async function fetchHomePageData() {
  const [slides, menu, testimonials, gallery] = await Promise.all([
    axios.get("/api/consumer/web-home-slider"),
    axios.get("/api/consumer/prd-product-type-list"),
    axios.get("/api/consumer/org-testimonial-list"),
    axios.get("/api/consumer/org-gallery-list"),
  ]);

  // axios.get("/api/consumer/web-home-slider"),
  // -------restaurent slides-------
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
  //               "caption": "we think we're in love",
  //               "doc_entity_id": 19,
  //               "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/caption-image/15-0-31-1-1.png"
  //           },
  //           {
  //               "caption": "healthy + delicious.",
  //               "doc_entity_id": 21,
  //               "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/caption-image/15-0-31-2-1.jpeg"
  //           }
  //       ]
  //   }
  // }

  
  // axios.get("/api/consumer/prd-product-type-list"),
  // const menu = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Product type list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "product_type_list": [{"product_type_entity_id": 100, "product_type": "Beef", "doc_entity_id": 5, "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/product-type-image/thumbnail/100-0-45-1-1.png"}, {"product_type_entity_id": 99, "product_type": "Chicken", "doc_entity_id": 4, "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/product-type-image/thumbnail/99-0-45-1-1.png"}, {"product_type_entity_id": 102, "product_type": "Drinks", "doc_entity_id": 7, "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/product-type-image/thumbnail/102-0-45-1-1.png"}, {"product_type_entity_id": 101, "product_type": "Lamb", "doc_entity_id": 6, "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/product-type-image/thumbnail/101-0-45-1-1.png"}, {"product_type_entity_id": 98, "product_type": "Sea Food", "doc_entity_id": 3, "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/product-type-image/thumbnail/98-0-45-1-1.png"}, {"product_type_entity_id": 96, "product_type": "Soups", "doc_entity_id": 1, "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/product-type-image/thumbnail/96-0-45-1-1.png"}, {"product_type_entity_id": 97, "product_type": "Vegtarian", "doc_entity_id": 2, "s3_path": "https://dev-sls-tansy-super-menu-web.s3.amazonaws.com/product-type-image/thumbnail/97-0-45-1-1.png"}]}
  // }
  // axios.get("/api/consumer/org-testimonial-list"),
  // const testimonials = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Testimonial list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "testimonial_list": [{"testimonial_id": 1, "testimonial_title": "Delicious Food", "testimonial_text": "...Thank you for the love in your food", "consumer_name": "Salman", "doc_entity_id": 14, "consumer_entity_id": 1, "s3_link_response": "https://s3.amazonaws.com/dev-sls-tansy-super-menu/consumer-image/thumbnail/1-0-38-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=Gr8LU0M%2BS%2FKCbvX2IoBcfQKL7Ws%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471670"}, {"testimonial_id": 2, "testimonial_title": "Very Tasty", "testimonial_text": "My wife and I, vacationing in SD from Chicago, had lunch Fri 17th at Mariyams kitchen and we were both absolutely pleased with everything at your place.", "consumer_name": "Ali", "doc_entity_id": 15, "consumer_entity_id": 2, "s3_link_response": "https://s3.amazonaws.com/dev-sls-tansy-super-menu/consumer-image/thumbnail/2-0-38-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=%2FfSssy3zV%2Bx03Lu2JZw6UUcx3NM%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471670"}, {"testimonial_id": 3, "testimonial_title": "Very Professional", "testimonial_text": "Thank you for dinner last night. It was amazing!! I have to say it\u2019s the best meal I have had in quite some time.", "consumer_name": "Mohammed", "doc_entity_id": 16, "consumer_entity_id": 3, "s3_link_response": "https://s3.amazonaws.com/dev-sls-tansy-super-menu/consumer-image/thumbnail/3-0-38-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=2lgTiFWuwabpdpRgK9hI6ml52e8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471670"}, {"testimonial_id": 4, "testimonial_title": "Fastest Service", "testimonial_text": "WOW!!! What an outstanding dinner you prepared at the Johnstons on Friday evening!!!", "consumer_name": "Kohli", "doc_entity_id": 17, "consumer_entity_id": 4, "s3_link_response": "https://s3.amazonaws.com/dev-sls-tansy-super-menu/consumer-image/thumbnail/4-0-38-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=Qfo%2BqsXSD379VQkJL%2F0LRC9AUfk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471670"}, {"testimonial_id": 5, "testimonial_title": "Worthy Food", "testimonial_text": "I just wanted to let you know that I had one of the best dinners of my life last night\u2026. at your restaurant!!", "consumer_name": "Sehwag", "doc_entity_id": 18, "consumer_entity_id": 5, "s3_link_response": "https://s3.amazonaws.com/dev-sls-tansy-super-menu/consumer-image/thumbnail/5-0-38-1-1.jpeg?AWSAccessKeyId=ASIASQKMXSW52ODOCWWN&Signature=EPlatelkg65XTBcSL1Xxmzg0PY8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRzBFAiEA0CfwH6rlXhcNIRH9CXrjvwQaKldrTIxENkhxrUIlpFICIAYuHtlk9XV%2BhORThfC4to6ROdIBR%2BfCmFb27Yyi3NLFKs8BCEMQAhoMMTcyNDk2NDkxOTYzIgxamk3KLF8PfW54v0YqrAG5Oy6KCVLHWsgY6cbOUHH%2FPzD2cfwXQCO4epzZQD2M8xpgoYiD1SaA54%2Fa5bX%2BLGV3qiLLQ%2FYIMUmbH5Hm%2Blf3yk%2FMRn%2BCmq0DLLl%2BlIiSCGKavQLpP30Jiho%2FTBaSlYYfEHuagixW%2FXfYCrViS5PfDFpfsoAQTalSVgf2Pf292iLfSvb32UKjsfTL6TGkMbQ5V3%2BmoOVXbMgreS7%2BUu2YJKQQHrI3urSKTJnFMIauroEGOuABKy0GqgvmH9c%2Bu8e0mDrNth5mr9SHsNspKDA5FCfB1QFOcfoVYcHTu9Hkw6eibHBK4zS4BdeazMqvdXD3yuJhtMETe0EkodK1YySQnxQaVBJkUENnFIeEdc%2FXSU%2F5ire90rs60rNZjhJivIJshJSFb4GarBqRuDpI6vadUa3%2FybX2JgUVtOHVKDlxWGsCqbKngvEXNT3mP2VtMsj%2B3MST9MXUl8XcsX0VA8wyxpNez15grLvnihBxucBGddNdyIeYFYP7Qm1fxOdRoaIrFeA1XgmCwffLT3bITVH26qcRO2U%3D&Expires=1613471670"}]}
  // }
  // axios.get("/api/consumer/org-gallery-list"),
  // const gallery = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Product gallery list fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "product_list": [{"album_entity_id": 104, "album_name": "Best 2020 client deal", "description": "We are the proud service providers for the leading rental industry in the market since past decade. We broke a deal of\nabout $ 2 million can are continuing to provide in their best interest.", "created_date": "2021-02-04 15:54:10", "doc_entity_id": 23, "s3_link_response": "https://s3.amazonaws.com/dev-sls-tansy-super-menu/gallery/album-1/thumbnail/104-0-42-1-1.png?AWSAccessKeyId=ASIASQKMXSW5QUNWMVDS&Signature=OcgHtXvfHxgYYDjjV8k8Wm0Walw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRjBEAiAHZyKhBduBRhlnc4Y9aF6mFxmgmRadI%2BXo%2BrGW48HGogIgQMBX6f89fWljzRqXVYOvl5XilzT2BBgF18YLoJWHZ94qzwEIQxACGgwxNzI0OTY0OTE5NjMiDEDaCVcCV%2FEy9bPkDSqsAXIh%2FezDudv8IP5cnlFc2GbNnGcEIbPcR5NAd1%2BZr2o5q5DlzQzTPkKLiSMwnC5UwKXWYcOpXHLjfH8eGSIs9wVcSIybIuN6yatbOQS4s8tydKapGcWumrc8AJEhzvh%2FjWBfB9O6bTSlMQd4UqHRHpslhj4vXMEpirUuTOVv%2FOPicK3OF4FtEslqCQFmP9PUYcQm8XZFBZ3FRdlQEXgXBc%2FFVqMDNXpelThbsywwo6mugQY64QGbUB8dhD8CX%2Bw33gF1Y11Yel2ynu%2FBC27mZ8d4kxig0%2FTMOrqB9ME3UvEsehiPIuB1sQTrwOWsFL4%2BjXBfHK%2BjoP2dj7Smq4TTeQ%2BSlnwvDFTRDq54yPz5QpBSCE%2Bep4U9mxhXf1LQVYbrdSpojEsWMu3x67Rd%2BrV3vw8eZmuLGetiSQS%2FS1IFNVrJKwW27LFbV1lvg6T7JFASsBZ7TT%2BAMTshUKcRyXFJ4%2B%2FzYA5OcjFnQUuP3mcz1MW6sxhjxFUazU2IFqcxZxikhB9EkA6zYmQY5OzdYArQOjHdyhU9tsc%3D&Expires=1613471671"}, {"album_entity_id": 105, "album_name": "Annual Celebrations", "description": "We are the proud service providers for the leading rental industry in the market since past decade. We broke a deal of\nabout $ 2 million can are continuing to provide in their best interest.", "created_date": "2021-02-04 15:54:11", "doc_entity_id": 24, "s3_link_response": "https://s3.amazonaws.com/dev-sls-tansy-super-menu/gallery/album-1/thumbnail/105-0-42-1-1.png?AWSAccessKeyId=ASIASQKMXSW5QUNWMVDS&Signature=ezWfgW7MIaR6mjEzR%2FoPZZhuuJw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEDoaCmFwLXNvdXRoLTEiRjBEAiAHZyKhBduBRhlnc4Y9aF6mFxmgmRadI%2BXo%2BrGW48HGogIgQMBX6f89fWljzRqXVYOvl5XilzT2BBgF18YLoJWHZ94qzwEIQxACGgwxNzI0OTY0OTE5NjMiDEDaCVcCV%2FEy9bPkDSqsAXIh%2FezDudv8IP5cnlFc2GbNnGcEIbPcR5NAd1%2BZr2o5q5DlzQzTPkKLiSMwnC5UwKXWYcOpXHLjfH8eGSIs9wVcSIybIuN6yatbOQS4s8tydKapGcWumrc8AJEhzvh%2FjWBfB9O6bTSlMQd4UqHRHpslhj4vXMEpirUuTOVv%2FOPicK3OF4FtEslqCQFmP9PUYcQm8XZFBZ3FRdlQEXgXBc%2FFVqMDNXpelThbsywwo6mugQY64QGbUB8dhD8CX%2Bw33gF1Y11Yel2ynu%2FBC27mZ8d4kxig0%2FTMOrqB9ME3UvEsehiPIuB1sQTrwOWsFL4%2BjXBfHK%2BjoP2dj7Smq4TTeQ%2BSlnwvDFTRDq54yPz5QpBSCE%2Bep4U9mxhXf1LQVYbrdSpojEsWMu3x67Rd%2BrV3vw8eZmuLGetiSQS%2FS1IFNVrJKwW27LFbV1lvg6T7JFASsBZ7TT%2BAMTshUKcRyXFJ4%2B%2FzYA5OcjFnQUuP3mcz1MW6sxhjxFUazU2IFqcxZxikhB9EkA6zYmQY5OzdYArQOjHdyhU9tsc%3D&Expires=1613471671"}]}

  // }

  return {
    slides: slides.data.home_slider_details,
    menu: menu.data.product_type_list,
    testimonials: testimonials.data.testimonial_list,
    gallery: gallery.data.product_list,
  };
}

export default function useRestaurantHome() {
  return useQuery("useRestaurantHome", fetchHomePageData, {
    staleTime: Infinity,
  });
}
