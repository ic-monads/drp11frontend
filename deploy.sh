#!/bin/bash

dotenv -e .env.production npx prisma db push
dotenv -e .env.production npx prisma db seed -- --env production