import { Response, Request } from 'express';
import { Controller, Res, Get, Req } from 'routing-controllers';

import { getRepoList, getReadme } from 'src/service/getGithub';

@Controller('/github')
export default class readmeRouter {
  @Get('/repos/:username')
  async getRepo(@Req() request: Request, @Res() response: Response) {
    const { username } = request.params;
    const repos = await getRepoList(username);
    return response.json({ data: repos });
  }

  @Get('/:username/:repo')
  async getReadme(@Req() request: Request, @Res() response: Response) {
    const { username, repo } = request.params;
    const readme = await getReadme(username, repo);
    return response.json({ data: readme });
  }
}
