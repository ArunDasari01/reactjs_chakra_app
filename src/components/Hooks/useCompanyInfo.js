import { useQuery } from "react-query";

export default function useCompanyInfo() {
  const queryState = useQuery("/api/consumer/org-company-info", {
    staleTime: Infinity,
  });
  // const queryState = {
  //   data:{"api_oparams": {}, "api_status": {"status": "Success", "message": "Company details fetched successfully"}, "sproc_oparams": {"oparam_err_flag": 0, "oparam_err_step": null, "oparam_err_msg": null}, "company_info": [{"organization_name": "Samonga Salon", "address1": "H. NO: 1-1-1", "address2": "xyz Street", "city_name": "New York", "postal_code": "500601", "contact_number": "+91 8801933344", "email": "ceo@tansycloud.com"}], "company_logos": [{"row_type": "header_logo", "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/Organization-Header-Logo/15-0-47-1-1.png"}, {"row_type": "footer_logo", "s3_path": "https://dev-srv-tansy-super-saloon-web.s3.amazonaws.com/Organization-Footer-Logo/15-0-48-1-1.png"}]}
  // }
  const logos = queryState.data?.company_logos ?? [];
  const headerLogo = logos.find((e) => e.row_type === "header_logo");
  const footerLogo = logos.find((e) => e.row_type === "footer_logo");
  return {
    ...queryState,
    info: {
      ...(queryState.data?.company_info?.[0] ?? {}),
      headerLogo: headerLogo?.s3_path,
      footerLogo: footerLogo?.s3_path,
    },
  };
}
