import { Response, Request } from 'express';
import { Controller, Res, Get, Req } from 'routing-controllers';

import { getReadme } from 'src/service/readme';

@Controller('/readme')
export default class readmeRouter {
  @Get('/:username')
  async getTestApi(@Req() request: Request, @Res() response: Response) {
    const { username } = request.params;
    const readme = await getReadme(username);
    return response.json({ data: readme });
  }
}
