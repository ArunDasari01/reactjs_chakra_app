import { useQuery } from "react-query";
import { Global } from "@emotion/react";
import { Center, ChakraProvider, extendTheme } from "@chakra-ui/react";

function useSiteTheme() {
  const queryState = useQuery("/api/consumer/web-theme", {
    staleTime: Infinity,
  });



// sales data 
// const queryState = {
//     data:{
//       "api_oparams": {},
//       "api_status": {
//           "status": "Success",
//           "message": "Web theme details fetched successfully"
//       },
//       "sproc_oparams": {
//           "oparam_err_flag": 0,
//           "oparam_err_step": null,
//           "oparam_err_msg": null
//       },
//       "template_name": [
//           {
//               "template_type": "Sales",
//               "template_type_id": 1
//           }
//       ],
//       "template_details": [
//           {
//               "theme_json": "[{\"color\": {\"50\": \"#dff2ff\", \"100\": \"#bddaf4\", \"200\": \"#96c3e6\", \"300\": \"#70afda\", \"400\": \"#4a9dcf\", \"500\": \"#3088b5\", \"600\": \"#22638e\", \"700\": \"#144067\", \"800\": \"#032140\", \"900\": \"#000a1b\"}, \"fonts\": {\"body\": \"Lato\", \"heading\": \"Lato\"}, \"fontImportCSS\": \"@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');\"}]"
//           }
//       ]
//     }
//   }

// service data
// const queryState = {
//       data: {
//         "api_oparams": {},
//         "api_status": {
//             "status": "Success",
//             "message": "Web theme details fetched successfully"
//         },
//         "sproc_oparams": {
//             "oparam_err_flag": 0,
//             "oparam_err_step": null,
//             "oparam_err_msg": null
//         },
//         "template_name": [
//             {
//                 "template_type": "service",
//                 "template_type_id": 1
//             }
//         ],
//         "template_details": [
//             {
//                 "theme_json": "[{\"color\": {\"50\": \"#e2efff\", \"100\": \"#bed5f2\", \"200\": \"#98bde7\", \"300\": \"#71a6dc\", \"400\": \"#4b91d1\", \"500\": \"#184a67\", \"600\": \"#347cb8\", \"700\": \"#266490\", \"800\": \"#092940\", \"900\": \"#000d1a\"}, \"fonts\": {\"body\": \"Mulish\", \"heading\": \"Mulish\"}, \"fontImportCSS\": \"@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&display=swap');\"}]"
//             }
//         ]
//     }
//   }

  // ----------------------------restarent data----------------------------
  // const queryState = {data:{
  //   "api_oparams": {},
  //   "api_status": {
  //       "status": "Success",
  //       "message": "Web theme details fetched successfully"
  //   },
  //   "sproc_oparams": {
  //       "oparam_err_flag": 0,
  //       "oparam_err_step": null,
  //       "oparam_err_msg": null
  //   },
  //   "template_name": [
  //       {
  //           "template_type": "restaurant",
  //           "template_type_id": 1
  //       }
  //   ],
  //   "template_details": [
  //       {
  //           "theme_json": "[{\"color\": {\"50\": \"#e2efff\", \"100\": \"#bed5f2\", \"200\": \"#98bde7\", \"300\": \"#71a6dc\", \"400\": \"#4b91d1\", \"500\": \"#184a67\", \"600\": \"#347cb8\", \"700\": \"#266490\", \"800\": \"#092940\", \"900\": \"#000d1a\"}, \"fonts\": {\"body\": \"Open Sans\", \"heading\": \"Cinzel\"}, \"fontImportCSS\": \"@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap');\"}]"
  //       }
  //   ]
  // }}
  const templateType = queryState.data?.template_name?.[0].template_type;
  const themeJSON = queryState.data?.template_details?.[0].theme_json ?? "[{}]";
  const theme = JSON.parse(themeJSON)[0];

  
  return {
    ...queryState,
    templateType,
    theme,
  };
}



export default function SiteTheme({ children }) {
  const { theme, templateType, isFetching } = useSiteTheme();

  if (isFetching)
    return (
      <Center height="100vh">
        <h1>...</h1>
      </Center>
    );

  return (
    <>
      <Global styles={`${theme.fontImportCSS}`} />
      <ChakraProvider
        theme={extendTheme({
          fonts: theme.fonts,
          colors: { primary: theme.color },
          template: templateType,
          components: {
            Button: {
              baseStyle: { borderRadius: "none" },
            },
          },
        })}
      >
        {children}
      </ChakraProvider>
    </>
  );
}
