'use strict';

import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

// const fp = require('fastify-plugin')
const pino = require('pino');
const fs = require('node:fs');

export default fp(function (fastify, opts = {}, done) {
    fastify.decorate(
        'set_log',
        function (
            error_code: string = '',
            error: FastifyError | { stack: any; message: any },
            res: FastifyReply,
            req: FastifyRequest,
        ): string {
            if (!Object.keys(error).length) {
                error = {
                    stack: '',
                    message: '',
                };
            }
            var streams = [
                // { stream: fs.createWriteStream('logs/info.log', { flags: 'a' }) },
                // { level: 'debug', stream: fs.createWriteStream('logs/debug.log', { flags: 'a' }) },
                // { stream: require('pino-pretty')() },
                {
                    level: 'fatal',
                    stream: fs.createWriteStream('logs/fatal.log', {
                        flags: 'a',
                    }),
                },
            ];

            var log = pino(
                {
                    level: 'debug',
                },
                pino.multistream(streams),
            );

            let stacks: string[] = [];
            let errors: { file: string; time: string; message: string } = {
                file: '',
                time: '',
                message: '',
            };
            let error_message = '';

            if (error.stack) {
                stacks = error.stack.split('at');
                errors = {
                    file: '',
                    time:
                        new Date().toLocaleDateString() +
                        ' ' +
                        new Date().toLocaleTimeString(),
                    message: error.message,
                };
                if (stacks.length) {
                    errors.file = stacks[1];
                }
            }

            // if (error.statusCode) {
            //     log.fatal(error.stack);
            //     res.status(error.statusCode).send({ error: error.message });
            // }
            else if (error_code == '404') {
                log = pino(
                    {
                        level: 'debug',
                    },
                    pino.multistream([
                        {
                            level: 'fatal',
                            stream: fs.createWriteStream('logs/404.log', {
                                flags: 'a',
                            }),
                        },
                        { stream: require('pino-pretty')() },
                    ]),
                );
                log.fatal({ error: '404', url: req.url });
                error.message = error_message = 'target not found';
            } else if (error_code == '500') {
                log.fatal(errors);
                error_message = 'internal server error';
            }

            console.log('');
            console.log('\x1b[31m');

            console.log(error.message);
            console.log(stacks[1] || '');

            console.log('\x1b[46m');
            console.log(error);
            console.log('\x1b[40m');

            console.log('');

            res.status(parseInt(error_code)).send({
                error: error_message,
                message: errors,
            });
            return 'log print';
        },
    );
    done();
});

declare module 'fastify' {
    export interface FastifyInstance {
        /**
         ```
            set_log('400', {stack:'', message,''})
         ```
         */
        set_log(
            error_code: string,
            error: FastifyError | {},
            res: FastifyReply,
            req: FastifyRequest,
        ): string;
    }
}
