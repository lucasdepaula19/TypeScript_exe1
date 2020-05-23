export function User_decorator(name: string, email: string) {
  return function(classFn: Function) {
    classFn.prototype.name = name;
    classFn.prototype.email = email;
  };
}
