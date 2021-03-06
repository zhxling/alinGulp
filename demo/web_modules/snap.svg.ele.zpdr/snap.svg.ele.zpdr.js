Snap.plugin(function (Snap, Element, Paper) {


    /**
     * Rotates a given Snap.Element the given amount of degrees. The amount of
     * degrees can be a negative or positive number, depending on which way you
     * want to rotate the node. The rotation will be done around the central
     * coordinates of the element.
     *
     * @method rotate
     * @public
     * @param {Integer} degrees
     */
    Paper.prototype.rotate = Element.prototype.rotate = function (degrees) {

        let t = this.transform().localMatrix.split();

        this.transform(`${this.transform().localMatrix.toTransformString()}r${degrees - t.rotate}`)

        eve(`snap.rotated.${this.id}`, this);
    };

    Paper.prototype.scale = Element.prototype.scale = function (zoomX, zoomY) {
        zoomY = zoomY || zoomX;
        let localMatrix = this.transform().localMatrix;
        zoomX = (parseFloat(zoomX) || 0.01) / localMatrix.a;
        zoomY = (parseFloat(zoomY) || 0.01) / localMatrix.d;

        this.transform(`${this.transform().localMatrix.toTransformString()}s${zoomX},${zoomY}`);

        eve(`snap.scaled.${this.id}`, this);
    };
});
