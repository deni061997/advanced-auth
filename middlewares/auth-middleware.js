import ApiError from "../exceptions/api-error";
import { tokenService } from "../service";

export default function (req, res, next) {
   try {
      const authorizationHeader = req.headers.authorization
      if (!authorizationHeader) {
         return next(ApiError.UnAuthorizedError())
      }

      const accessToken = authorizationHeader.split(' ')[1]
      if (!accessToken) {
         return next(ApiError.UnAuthorizedError())
      }

      const userData = tokenService.validateAccessToken(accessToken)
      if (!userData) {
         return next(ApiError.UnAuthorizedError())
      }

      req.user = userData
      next()
   } catch (error) {
      return next(ApiError.UnAuthorizedError())
   }
}
