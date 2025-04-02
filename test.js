const adminPath2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "AdminDashboard",
  },
  {
    name: "Dashboard",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Create Faculty",
        path: "create-faulty",
        element: "CreateFaculty",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CreateStudent",
      },
    ],
  },
];

const adminPath = adminPath2.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: "NaveLink",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NaveLink",
      })),
    });
  }
  return acc;
}, []);
// const adminPath = adminPath2.reduce((acc, item) => {
//   if (item.element && item.path) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
console.log(adminPath);
