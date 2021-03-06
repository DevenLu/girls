import { Configuration, App } from '@midwayjs/decorator';
import { Application } from '@midwayjs/koa';
import bodyParser from 'koa-bodyparser';

@Configuration({
  conflictCheck: true
})
export class ContainerLifeCycle {
  @App()
  app: Application;

  async onReady(): Promise<void> {
    // bodyparser options see https://github.com/koajs/bodyparser
    this.app.use(bodyParser());
  }
}
