// import { Controller, Get, Post, Body, Res } from '@nestjs/common';
// import { BlogService } from './blog.service';
// import { LegendsDetailsType } from '../Legends/legends.types';

// @Controller('blog')
// export class BlogController {
//   constructor(private readonly blogService: BlogService) {}

//   @Get()
//   getAllLegends() {
//     return this.blogService.getAllLegends();
//   }

//   @Post()
//   incorporateLegend(
//     @Res() res:Response,
//     @Body() body: LegendsDetailsType): Promise<Response> {
//     try{
//         const{
//             name,
//         } = body
//     } catch (error) {
//         console.log('no estás metiendo bien los datos')
//         return res.status(500).send('controller error')
//     }
//   }
// }

