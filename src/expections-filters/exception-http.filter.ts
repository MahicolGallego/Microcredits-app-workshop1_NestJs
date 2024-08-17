import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const res= ctx.getResponse();
        const status = exception.getStatus();

        res.status(status).json({
            status_code: status,
            message: exception.message
        })
    }
}
