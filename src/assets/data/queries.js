import { customers } from "./customers";
import { categories } from "./categories";
import { products } from "./products";

export const queryMap = [
  {
    tableQuery: "Customers",
    query: "select * from CUSTOMERS",
    tableFields: [
      "customerID",
      "companyName",
      "contactName",
      "contactTitle",
      "address",
      "city",
      "region",
      "postalCode",
      "country",
      "phone",
      "fax",
    ],
    data: customers,
  },
  {
    tableQuery: "Categories",
    query: "select * from CATEGORIES",
    tableFields: ["categoryID", "categoryName", "description", "picture"],
    data: categories,
  },
  {
    tableQuery: "Products",
    query: "select * from PRODUCTS",
    tableFields: [
      "productID",
      "productName",
      "supplierID",
      "categoryID",
      "quantityPerUnit",
      "unitPrice",
      "unitsInStock",
      "unitsOnOrder",
      "reorderLevel",
      "discontinued",
    ],
    data: products,
  },
];
