/**
 * @author Noah Sun
 * @email 
 * @create date 2017-10-16 11:48:45
 * @modify date 2017-10-16 11:48:45
 * @desc 组合模式
 *  两个优点：
 *      1. 你可以像对待单个独立的对象一样对待这些对象的集合。
 *          在组合模式种，函数的执行会被分派到各个子对象中执行。
 *          这对一个大的集合非常有用。
 *      2.组合模式把对象组织成一棵树的结构，并且，因为每一个组合对象都包含一个获取其子对象的方法，
 *          所以你可以隐藏具体的实现，并且随便你怎么组织这些子对象
*/

const GalleryComposite = function (heading, id) {
    this.children = [];
    this.element = $(`<div id="${id}" class="compoite-gallery"></div>`)
        .append(`<h2>${heading}</h2>`);
};

GalleryComposite.prototype = {
    add: function (child) {
        this.children.push(child);
        this.element.append(child.getElement());
    },
    remove: function (child) {
        for (let node, i = 0; node = this.getChild(i); i++) {
            if (node == child) {
                this.children.splice(i, 1);
                this.element.detach(child.getElement());
                return true;
            }
            if (node.remove(child)) {
                return true;
            }
        }

        return false;
    },
    getChild: function (i) {
        return this.children[i];
    },
    hide: function () {
        for (let node, i = 0; node = this.getChild(i); i++) {
            node.hide();
        }
        this.element.hide(0);
    },
    show: function () {
        for (let node, i = 0; node = this.getChild(i); i++) {
            node.show();
        }
        this.element.show(0);
    },
    getElement: function () {
        return this.element;
    }
}

const GalleryImage = function (src, id) {
    this.children = [];
    this.element = $('<img/>')
        .attr({
            id, src
        });
};

GalleryImage.prototype = {
    // 由于这是叶子节点，所以用不着这些方法，
    // 但是必须实现他们，就当作是实现Composite接口
    add: function () { },

    remove: function () { },

    getChild: function () { },

    hide: function () {
        this.element.hide(0);
    },

    show: function () {
        this.element.show(0);
    },

    getElement: function () {
        return this.element;
    }
}
/**
 * 注意，GalleryImage类并没有在add，remove和getChild函数里做任何事情。
 * 因为它是个叶子类，它不包含任何子节点，所以它不需要在这些方法里做任何事。
 * 但是我们需要罗列这些方法，目的是遵守我们之前定下的接口。
 * 毕竟，组合对象并不知道自己是不是叶子，所以有可能尝试调用这些方法。
 */

// 使用
const container = new GalleryComposite('', 'allgalleries');
const gallery1 = new GalleryComposite('Gallery 1', 'gallery1');
const gallery2 = new GalleryComposite('Gallery 2', 'gallery2');
const image1 = new GalleryImage('image1.jpg', 'img1');
const image2 = new GalleryImage('image2.jpg', 'img2');
const image3 = new GalleryImage('image3.jpg', 'img3');
const image4 = new GalleryImage('image4.jpg', 'img4');

gallery1.add(image1);
gallery1.add(image2);

gallery2.add(image3);
gallery2.add(image4);

container.add(gallery1);
container.add(gallery2);

// 确保把container添加到了body下面，
// 否则它永远不会显示.
container.getElement().appendTo('body');
container.show();