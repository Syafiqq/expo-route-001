import { Href, Router } from 'expo-router';

const clearAndReplace = <T extends string | object>(router: Router, path: Href<T>) => {
  if (router.canDismiss()) {
    router.dismissAll();
  }
  router.replace(path);
}

const clearAndNavigate = <T extends string | object>(router: Router, path: Href<T>) => {
  if (router.canDismiss()) {
    router.dismissAll();
  }
  router.navigate(path);
}


export {
  clearAndReplace,
  clearAndNavigate,
}
