export default class UserDto {
   email;
   id;
   isActivated;

   constructor(model) {
      const { isActivated, email, id } = model;
      
      this.email = email;
      this.id = id;
      this.isActivated = isActivated;
   }
}
