sap.ui.define([
	"sacde/PortalProveedores/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sacde.PortalProveedores.controller.Home", {

		onGoToTiles: function () {
			const sUrl =
				"https://registracionusuariosprov-goio5drrj1.dispatcher.br1.hana.ondemand.com/index.html?hc_reset";
			window.open(sUrl, "_blank");
		},

		onGoToRegister: function () {
			this.navTo("Register");
		}

	});
});
