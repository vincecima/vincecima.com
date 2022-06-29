terraform {
  backend "local" {}

  required_providers {
    fly = {
      source  = "fly-apps/fly"
      version = "0.0.9"
    }
  }
}

variable "fly_token" {
  description = "Fly.io access token"
  type        = string
  sensitive   = true
}

provider "fly" {
  fly_api_token = var.fly_token
}

resource "fly_app" "production" {
  name = "vincecima-xyz-site"
}

resource "fly_ip" "v4" {
  app  = fly_app.production.name
  type = "v4"
}

resource "fly_ip" "v6" {
  app  = fly_app.production.name
  type = "v6"
}
