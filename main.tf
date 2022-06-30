terraform {
  backend "local" {}

  required_providers {
    fly = {
      source  = "fly-apps/fly"
      version = "0.0.9"
    }

    gandi = {
      source  = "go-gandi/gandi"
      version = "2.1.0"
    }
  }
}

variable "fly_token" {
  description = "Fly.io access token"
  type        = string
  sensitive   = true
}

variable "gandi_key" {
  description = "Gandi production API key"
  type        = string
  sensitive   = true
}

provider "fly" {
  fly_api_token = var.fly_token
}

provider "gandi" {
  key = var.gandi_key
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

resource "gandi_domain" "vincecima_xyz" {
  name = "vincecima.xyz"

  owner {
    city    = "Chicago"
    country = "US"
    email   = "contact@vincecima.com"
    extra_parameters = {
      "birth_city"       = ""
      "birth_country"    = ""
      "birth_date"       = ""
      "birth_department" = ""
    }
    family_name     = "Cima"
    given_name      = "Vincent"
    phone           = "+1.3125761061"
    state           = "US-IL"
    street_addr     = "3918 N Southport Ave"
    type            = "person"
    zip             = "60613-2666"
    data_obfuscated = true
    mail_obfuscated = true
  }

  admin {
    city    = "Chicago"
    country = "US"
    email   = "contact@vincecima.com"
    extra_parameters = {
      "birth_city"       = ""
      "birth_country"    = ""
      "birth_date"       = ""
      "birth_department" = ""
    }
    family_name     = "Cima"
    given_name      = "Vincent"
    phone           = "+1.3125761061"
    state           = "US-IL"
    street_addr     = "3918 N Southport Ave"
    type            = "person"
    zip             = "60613-2666"
    data_obfuscated = true
    mail_obfuscated = true
  }

  tech {
    city    = "Chicago"
    country = "US"
    email   = "contact@vincecima.com"
    extra_parameters = {
      "birth_city"       = ""
      "birth_country"    = ""
      "birth_date"       = ""
      "birth_department" = ""
    }
    family_name     = "Cima"
    given_name      = "Vincent"
    phone           = "+1.3125761061"
    state           = "US-IL"
    street_addr     = "3918 N Southport Ave"
    type            = "person"
    zip             = "60613-2666"
    data_obfuscated = true
    mail_obfuscated = true
  }

  billing {
    city    = "Chicago"
    country = "US"
    email   = "contact@vincecima.com"
    extra_parameters = {
      "birth_city"       = ""
      "birth_country"    = ""
      "birth_date"       = ""
      "birth_department" = ""
    }
    family_name     = "Cima"
    given_name      = "Vincent"
    phone           = "+1.3125761061"
    state           = "US-IL"
    street_addr     = "3918 N Southport Ave"
    type            = "person"
    zip             = "60613-2666"
    data_obfuscated = true
    mail_obfuscated = true
  }
}

resource "gandi_livedns_record" "vincecima_xyz_a" {
  name   = "@"
  ttl    = 10800
  type   = "A"
  values = [fly_ip.v4.address]
  zone   = gandi_domain.vincecima_xyz.name
}

resource "gandi_livedns_record" "vincecima_xyz_aaaa" {
  name   = "@"
  ttl    = 10800
  type   = "AAAA"
  values = [fly_ip.v6.address]
  zone   = gandi_domain.vincecima_xyz.name
}
