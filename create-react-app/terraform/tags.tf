module "single-view-jigsaw-prototype" {
  source      = "git::https://github.com/cloudposse/terraform-null-label.git?ref=cf38625a5dde227db04c9cfedc1327d610229fec"
  namespace   = "single-view"
  environment = terraform.workspace
  name        = "single-view-jigsaw-prototype"

  tags = {
    Owner                  = "charli.wild@madetech.com"
    ApplicationServiceName = "Single View"
  }
}
