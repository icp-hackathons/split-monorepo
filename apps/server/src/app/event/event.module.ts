import { Module } from "@nestjs/common";
import { EventResolver } from "./event.resolver";
import { EventService } from "./event.service";

@Module({
  providers: [EventResolver, EventService],
  exports: [EventService],
})
export class EventModule {}
