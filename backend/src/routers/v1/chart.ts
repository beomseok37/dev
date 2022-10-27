import { Request, Response } from 'express';
import { Controller, Req, Res, Get } from 'routing-controllers';

import { option1, option2, option3, option4, option5, option6 } from 'src/data/options';

@Controller('/chart')
export default class chartRouter {
  @Get('/:optionNumber')
  getTestApi(@Req() request: Request, @Res() response: Response) {
    const { optionNumber } = request.params;
    if (optionNumber === '1') {
      return response.json(option1);
    }
    if (optionNumber === '2') {
      return response.json(option2);
    }
    if (optionNumber === '3') {
      return response.json(option3);
    }
    if (optionNumber === '4') {
      return response.json(option4);
    }
    if (optionNumber === '5') {
      return response.json(option5);
    }
    return response.json(option6);
  }
}
