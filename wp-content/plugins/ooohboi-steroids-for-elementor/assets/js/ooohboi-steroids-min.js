"use strict";
! function(e, t) {
    var s = e(t);
    s.on("elementor/frontend/init", (function() {
        var t = elementorModules.frontend.handlers.Base.extend({
                onInit: function() {
                    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), this.initSectionExtends()
                },
                isBreakingBad: function() {
                    return this.$element.hasClass("ob-is-breaking-bad")
                },
                isGlider: function() {
                    return this.$element.hasClass("ob-is-glider")
                },
                isInnerSection: function() {
                    return this.$element.hasClass("elementor-inner-section")
                },
                onElementChange: function(e) {
                    "_ob_bbad_use_it" === e && ("yes" === this.getElementSettings("_ob_bbad_use_it") ? (this.$element.addClass("ob-is-breaking-bad"), this.isInnerSection() && this.$element.addClass("ob-bb-inner")) : (this.$element.removeClass("ob-is-breaking-bad"), this.isInnerSection() && this.$element.removeClass("ob-bb-inner"))), "_ob_glider_is_slider" === e && ("yes" === this.getElementSettings("_ob_glider_is_slider") ? (this.$element.addClass("ob-is-glider"), this.addClassesRouteGlider(".elementor-element-" + this.$element.attr("data-id"), "addClass"), this.initSwiperElements()) : "yes" != this.getElementSettings("_ob_glider_is_slider") && (this.$element.removeClass("ob-is-glider"), this.addClassesRouteGlider(".elementor-element-" + this.$element.attr("data-id"), "removeClass"))), "_ob_bbad_sssic_use" === e && this.isInnerSection() && ("yes" === this.getElementSettings("_ob_bbad_sssic_use") ? this.$element.addClass("ob-is-sticky-inner-section") : this.$element.removeClass("ob-is-sticky-inner-section"))
                },
                addClassesRouteGlider: function(t, s) {
                    var i = e(t).children(".elementor-container").first();
                    i.length && i.addClass("swiper-container");
                    var o = e(i).children(".elementor-row").first();
                    o.length && "addClass" == s ? (o.addClass("swiper-wrapper"), e(o).children("div.elementor-column").addClass("swiper-slide")) : o.length || "addClass" != s || (e(i).children("div.elementor-column").wrapAll('<div class="swiper-wrapper" />'), e(i).children(".swiper-wrapper").first().children("div.elementor-column").addClass("swiper-slide")), o.length && "removeClass" == s ? (i.removeClass("swiper-container"), o.removeClass("swiper-wrapper"), e(o).children("div.elementor-column").removeClass("swiper-slide")) : o.length || "removeClass" != s || (i.removeClass("swiper-container"), e(i).children("div.swiper-wrapper").unwrap(), e(i).children("div.elementor-column").removeClass("swiper-slide"))
                },
                initSectionExtends: function() {
                    if (this.isEdit ? ("yes" !== this.getElementSettings("_ob_bbad_use_it") || this.isBreakingBad() || (this.$element.addClass("ob-is-breaking-bad"), this.isInnerSection() && this.$element.addClass("ob-bb-inner")), "yes" === this.getElementSettings("_ob_glider_is_slider") && (this.$element.addClass("ob-is-glider"), this.addClassesRouteGlider(".elementor-element-" + this.$element.attr("data-id"), "addClass"), this.initSwiperElements())) : "yes" === this.getElementSettings("_ob_glider_is_slider") && (this.$element.addClass("ob-is-glider"), this.addClassesRouteGlider(".elementor-element-" + this.$element.attr("data-id"), "addClass"), this.initSwiperElements()), "yes" === this.getElementSettings("_ob_bbad_sssic_use") && this.isInnerSection()) {
                        this.isEdit && this.$element.addClass("ob-is-sticky-inner-section");
                        var e = this.$element.closest(".elementor-widget-wrap");
                        e.length && e.addClass("ob-sssic-wrapper")
                    }
                },
                initSwiperElements: function() {
                    this.$element.children(".elementor-container").find(".swiper-button-next").first().length || this.$element.children(".elementor-container").first().append('<div class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin" viewBox="0 0 27 44"><path d="M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z"></path></svg></div>'), this.$element.children(".elementor-container").find(".swiper-button-prev").first().length || this.$element.children(".elementor-container").first().append('<div class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin" viewBox="0 0 27 44"><path d="M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z"></path></svg></div>'), this.$element.children(".elementor-container").find(".swiper-pagination").first().length || this.$element.children(".elementor-container").first().append('<div class="swiper-pagination"></div>');
                    var e = {};
                    e.pagination_type = this.getElementSettings("_ob_glider_pagination_type"), e.allowTouchMove = this.getElementSettings("_ob_glider_allow_touch_move"), e.autoheight = this.getElementSettings("_ob_glider_auto_h"), e.effect = this.getElementSettings("_ob_glider_effect"), e.loop = this.getElementSettings("_ob_glider_loop"), e.direction = this.getElementSettings("_ob_glider_direction"), e.parallax = this.getElementSettings("_ob_glider_parallax"), e.speed = this.getElementSettings("_ob_glider_speed");
                    var t = this.getElementSettings("_ob_glider_autoplay");
                    e.autoplay = !!t && {
                        delay: this.getElementSettings("_ob_glider_autoplay_delay")
                    }, e.mousewheel = this.getElementSettings("_ob_glider_allow_mousewheel"), e.allowMultiSlides = this.getElementSettings("_ob_glider_allow_multi_slides");
                    var s = {},
                        o = elementorFrontend.config.breakpoints;
                    s[o.lg] = {
                        slidesPerView: this.getElementSettings("_ob_glider_slides_per_view"),
                        slidesPerGroup: this.getElementSettings("_ob_glider_slides_to_scroll"),
                        spaceBetween: +this.getElementSettings("_ob_glider_space_between") || 0
                    }, s[o.md] = {
                        slidesPerView: this.getElementSettings("_ob_glider_slides_per_view_tablet"),
                        slidesPerGroup: this.getElementSettings("_ob_glider_slides_to_scroll_tablet"),
                        spaceBetween: +this.getElementSettings("_ob_glider_space_between_tablet") || 0
                    }, s[0] = {
                        slidesPerView: this.getElementSettings("_ob_glider_slides_per_view_mobile"),
                        slidesPerGroup: this.getElementSettings("_ob_glider_slides_to_scroll_mobile"),
                        spaceBetween: +this.getElementSettings("_ob_glider_space_between_mobile") || 0
                    }, e.breakpoints = s, e.slides_centered = this.getElementSettings("_ob_glider_centered_slides"), e.slides_centered_bounds = this.getElementSettings("_ob_glider_centered_bounds_slides"), e.slides_round_lenghts = this.getElementSettings("_ob_glider_roundlengths_slides"), i(this.$element.attr("data-id"), e, "glider_" + this.$element.attr("data-id"))
                }
            }),
            o = elementorModules.frontend.handlers.Base.extend({
                onInit: function() {
                    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), this.$element.find(".elementor-column-wrap").first().length || this.$element.addClass("ob-is-e3");
                    var e = navigator.userAgent.toLowerCase();
                    e.indexOf("chrome") > -1 && this.teleporterChromeResize(), this.initColumnExtends()
                },
                teleporterChromeResize: function() {
                    if (this.isTeleporter()) {
                        var e = this,
                            t = this.$element.attr("data-id");
                        s.on("resize", (function() {
                            e.$element.closest(".ob-is-teleporter").addClass("ob-chrome-resize"), clearTimeout(t), t = setTimeout((function() {
                                var t = parseInt(e.$element.closest(".ob-is-teleporter").css("height")),
                                    s = e.$element.find(".elementor-column-wrap").first();
                                s.length ? s.css({
                                    height: t
                                }) : e.$element.find(".elementor-widget-wrap").first().css({
                                    height: t
                                }), e.$element.closest(".ob-is-teleporter").removeClass("ob-chrome-resize")
                            }), 500)
                        })), s.trigger("resize")
                    }
                },
                isTeleporter: function() {
                    return this.$element.hasClass("ob-is-teleporter")
                },
                isWidgetStalkerCol: function() {
                    return this.$element.hasClass("ob-is-stalker")
                },
                initColumnExtends: function() {
                    if (!this.isEdit) {
                        var e = {};
                        try {
                            e = JSON.parse(this.$element.attr("data-settings"))
                        } catch (e) {
                            return
                        }
                        if (void 0 !== e._ob_bbad_link) {
                            var t = e._ob_bbad_link;
                            if ("" === t.url) return void this.$element.removeClass("bb-column-link");
                            this.$element.addClass("bb-column-link"), this.$element.off("click.bb"), this.$element.on("click.bb", (function() {
                                t.is_external ? window.open(t.url) : location.href = t.url
                            }))
                        }
                    }
                    this.isEdit && "use-teleporter" === this.getElementSettings("_ob_teleporter_use") && (this.$element.addClass("ob-is-teleporter"), this.$element.find(".elementor-widget-wrap").first().addClass("ob-tele-midget"), this.doTeleporterEditor()), !this.isEdit && this.isTeleporter() && (this.$element.find(".elementor-widget-wrap").first().addClass("ob-tele-midget"), this.doTeleporter()), this.isEdit && "yes" === this.getElementSettings("_ob_bbad_is_stalker") && this.$element.addClass("ob-is-stalker")
                },
                onElementChange: function(e) {
                    "_ob_teleporter_overlay_color" === e ? this.$element.find('div[class*="ob-teleporter-"] > .ob-tele-overlay').css("background-color", this.getElementSettings("_ob_teleporter_overlay_color")) : "_ob_teleporter_no_pass_tablet" === e ? "no-tablet" === this.getElementSettings("_ob_teleporter_no_pass_tablet") ? this.$element.addClass("ob-tele-no-tablet") : this.$element.removeClass("ob-tele-no-tablet") : "_ob_teleporter_no_pass_mobile" === e && ("no-mobile" === this.getElementSettings("_ob_teleporter_no_pass_mobile") ? this.$element.addClass("ob-tele-no-mobile") : this.$element.removeClass("ob-tele-no-mobile")), "_ob_bbad_is_stalker" === e && this.routeWidgetStalkerCol()
                },
                routeWidgetStalkerCol: function() {
                    this.isWidgetStalkerCol() || "yes" !== this.getElementSettings("_ob_bbad_is_stalker") ? this.$element.removeClass("ob-is-stalker") : this.$element.addClass("ob-is-stalker")
                },
                doTeleporterEditor: function() {
                    if ("use-teleporter" === this.getElementSettings("_ob_teleporter_use")) {
                        var t = this.$element.find(".elementor-widget-wrap").first();
                        if (t.length && (t.wrapInner('<div class="widget-wrap-children" />'), t.find(".elementor-background-overlay").first().length && t.find(".elementor-background-overlay").first().insertBefore(t.find(".elementor-background-overlay").first().parent())), "do-pass" === this.getElementSettings("_ob_teleporter_pass")) {
                            var s = this,
                                i = this.$element,
                                o = this.$element.attr("data-id");
                            "no-tablet" === this.getElementSettings("_ob_teleporter_no_pass_tablet") && this.$element.addClass("ob-tele-no-tablet"), "no-mobile" === this.getElementSettings("_ob_teleporter_no_pass_mobile") && this.$element.addClass("ob-tele-no-mobile");
                            var n = "section" === this.getElementSettings("_ob_teleporter_pass_element") ? this.$element.closest(".elementor-section") : this.$element.closest(".elementor-container");
                            if (n.length) {
                                n.css("overflow", "hidden");
                                var l = this.getElementSettings("_ob_teleporter_pass_effect"),
                                    r = '<div class="ob-teleporter-' + o + " ob-tele-eff-" + l + '" data-id-teleporter="' + o + '"><div class="ob-tele-overlay" style="background-color: ' + this.getElementSettings("_ob_teleporter_overlay_color") + ';"></div></div>';
                                e(".ob-teleporter-" + o).length || this.$element.prepend(r), this.$element.off("mouseenter mouseleave"), this.$element.on("mouseenter mouseleave", (function(t) {
                                    if ("mouseenter" === t.type) {
                                        if ("no-tablet" === s.getElementSettings("_ob_teleporter_no_pass_tablet") && "tablet" === elementorFrontend.getCurrentDeviceMode()) return;
                                        if ("no-mobile" === s.getElementSettings("_ob_teleporter_no_pass_mobile") && "mobile" === elementorFrontend.getCurrentDeviceMode()) return;
                                        if ("do-pass" !== s.getElementSettings("_ob_teleporter_pass")) return;
                                        var l = {
                                            "background-color": e(".ob-teleporter-" + o).css("background-color"),
                                            "background-image": e(".ob-teleporter-" + o).css("background-image"),
                                            "background-position": e(".ob-teleporter-" + o).css("background-position"),
                                            "background-size": e(".ob-teleporter-" + o).css("background-size"),
                                            "background-repeat": e(".ob-teleporter-" + o).css("background-repeat")
                                        };
                                        if ("section" === s.getElementSettings("_ob_teleporter_pass_element")) {
                                            var r = n.children().not(".elementor-container").detach();
                                            n.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-" + o)), n.prepend(r)
                                        } else n.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-" + o));
                                        e(".ob-teleporter-" + o).css(l).hide(), e(".ob-teleporter-" + o).addClass("ob-teleporter-hover").show()
                                    } else n.removeClass("ob-tele-mom-hover"), setTimeout((function() {
                                        e(".ob-teleporter-" + o).removeAttr("style").removeClass("ob-teleporter-hover"), i.prepend(e(".ob-teleporter-" + o))
                                    }), 100)
                                }))
                            }
                        }
                    }
                },
                doTeleporter: function() {
                    var t = {};
                    try {
                        t = JSON.parse(this.$element.attr("data-settings"))
                    } catch (e) {
                        return
                    }
                    if ("use-teleporter" === t._ob_teleporter_use) {
                        var s = this.$element.find(".elementor-widget-wrap").first();
                        s.length && (s.wrapInner('<div class="widget-wrap-children" />'), s.find(".elementor-background-overlay").first().length && s.find(".elementor-background-overlay").first().insertBefore(s.find(".elementor-background-overlay").first().parent()));
                        var i = this.$element,
                            o = this.$element.attr("data-id");
                        if ("no-tablet" === t._ob_teleporter_no_pass_tablet && this.$element.addClass("ob-tele-no-tablet"), "no-mobile" === t._ob_teleporter_no_pass_mobile && this.$element.addClass("ob-tele-no-mobile"), void 0 !== t._ob_teleporter_link) {
                            var n = t._ob_teleporter_link;
                            if ("" === n.url) return;
                            this.$element.off("click.obTeleporter"), this.$element.on("click.obTeleporter", (function() {
                                n.is_external ? window.open(n.url) : location.href = n.url
                            }))
                        }
                        if ("do-pass" === t._ob_teleporter_pass) {
                            var l = "section" === t._ob_teleporter_pass_element ? this.$element.closest(".elementor-section") : this.$element.closest(".elementor-container");
                            if (l.length) {
                                l.css("overflow", "hidden");
                                var r = t._ob_teleporter_pass_effect,
                                    a = '<div class="ob-teleporter-' + o + " ob-tele-eff-" + r + '" data-id-teleporter="' + o + '"><div class="ob-tele-overlay" style="background-color: ' + t._ob_teleporter_overlay_color + ';"></div>';
                                e(".ob-teleporter-" + o).length || this.$element.prepend(a), this.$element.off("mouseenter mouseleave"), this.$element.on("mouseenter", (function() {
                                    if (!("no-tablet" === t._ob_teleporter_no_pass_tablet && "tablet" === elementorFrontend.getCurrentDeviceMode() || "no-mobile" === t._ob_teleporter_no_pass_mobile && "mobile" === elementorFrontend.getCurrentDeviceMode())) {
                                        var s = {
                                            "background-color": e(".ob-teleporter-" + o).css("background-color"),
                                            "background-image": e(".ob-teleporter-" + o).css("background-image"),
                                            "background-position": e(".ob-teleporter-" + o).css("background-position"),
                                            "background-size": e(".ob-teleporter-" + o).css("background-size"),
                                            "background-repeat": e(".ob-teleporter-" + o).css("background-repeat")
                                        };
                                        if ("section" === t._ob_teleporter_pass_element) {
                                            var i = l.children().not(".elementor-container").detach();
                                            l.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-" + o)), l.prepend(i)
                                        } else l.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-" + o));
                                        e(".ob-teleporter-" + o).css(s).hide(), e(".ob-teleporter-" + o).show().addClass("ob-teleporter-hover")
                                    }
                                })), this.$element.on("mouseleave", (function() {
                                    l.removeClass("ob-tele-mom-hover"), setTimeout((function() {
                                        e(".ob-teleporter-" + o).removeAttr("style").removeClass("ob-teleporter-hover"), i.prepend(e(".ob-teleporter-" + o))
                                    }), 100)
                                }))
                            }
                        }
                    }
                }
            }),
            n = {
                section: t,
                column: o
            };
        e.each(n, (function(e, t) {
            elementorFrontend.hooks.addAction("frontend/element_ready/" + e, (function(e) {
                elementorFrontend.elementsHandler.addHandler(t, {
                    $element: e
                })
            }))
        }))
    }));
    var i = function(t, s) {
        var i, o = e(".elementor-element-" + t),
            n = e(".elementor-element-" + t + " .swiper-container").first(),
            l = n.parent().parent().find("nav.glider-controller"),
            r = {
                allowTouchMove: "yes" === s.allowTouchMove,
                autoHeight: "yes" === s.autoheight,
                effect: s.effect,
                loop: s.loop,
                direction: "fade" === s.effect ? "horizontal" : s.direction,
                parallax: "yes" === s.parallax,
                speed: s.speed,
                breakpoints: "yes" === s.allowMultiSlides && s.breakpoints,
                centeredSlides: "yes" === s.slides_centered,
                centeredSlidesBounds: "yes" === s.slides_centered_bounds,
                roundLengths: "yes" === s.slides_round_lenghts,
                navigation: {
                    nextEl: ".elementor-element-" + t + " .swiper-button-next",
                    prevEl: ".elementor-element-" + t + " .swiper-button-prev"
                },
                pagination: {
                    el: ".elementor-element-" + t + " .swiper-pagination",
                    type: s.pagination_type,
                    clickable: !0
                },
                autoplay: s.autoplay,
                mousewheel: "yes" === s.mousewheel,
                watchOverflow: !0
            };
        if ("undefined" == typeof Swiper) {
            new(0, elementorFrontend.utils.swiper)(n, r).then((e => {
                i = e
            }))
        } else i = new Swiper(n, r);
        n.find('[class*="glider-control"]').on("click", (function(t) {
            if (void 0 !== e(this).data("gotoslide")) i.slideTo(parseInt(e(this).data("gotoslide")));
            else {
                var s = parseInt(e(this).attr("class").match(/glider-control-(\d+)/)[1]);
                s > 0 && i.slideTo(s)
            }
            t.preventDefault()
        })), l.find('[class*="glider-control"]').on("click", (function(t) {
            if (void 0 !== e(this).data("gotoslide")) i.slideTo(parseInt(e(this).data("gotoslide")));
            else {
                var s = parseInt(e(this).attr("class").match(/glider-control-(\d+)/)[1]);
                s > 0 && i.slideTo(s)
            }
            t.preventDefault()
        })), o.css("visibility", "visible")
    }
}(jQuery, window);