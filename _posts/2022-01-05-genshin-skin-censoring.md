---
title: 《原神》国服部分角色皮肤仓促修改事件
date: 2022-01-05
tags: 游戏 原神
categories: article
---
[《原神》将修改部分角色外观，你有哪些建议？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/509909910)

旧版模型备份：[lwd-temp/site-cdn: GitHub CDN for lwd-temp.top
](https://github.com/lwd-temp/site-cdn)

您也可以通过页面右上角的控制器选择您希望查看的模型并翻到页面最下端（一直向下翻）查看模型展示。模型版权归米哈游所有。

此模型查看功能主要采用three.js实现。

---

亲爱的旅行者：

**非常抱歉，为响应相关审核要求，**我们将在1月5日的2.4版本更新，以及后续的2.5版本更新中，对游戏中部分角色与表现进行调整。对于本次仓促调整带来的不便，我们深表歉意。

〓2.4版本调整内容〓

（1） 调整角色「蒲公英骑士·琴(风)」、「飞行冠军·安柏(火)」、「棘冠恩典·罗莎莉亚(冰)」、「星天水镜·莫娜(水)」的外观表现；

（2） 调整角色在飞行状态下特定视角的表现。

〓2.5版本调整内容〓

（1） 基于2.4版本的改动，调整角色「蒲公英骑士·琴(风)」、「棘冠恩典·罗莎莉亚(冰)」和「星天水镜·莫娜(水)」的立绘表现；

（2） 基于2.4版本的改动，调整角色「蒲公英骑士·琴(风)」、「棘冠恩典·罗莎莉亚(冰)」和「星天水镜·莫娜(水)」在过场动画中的表现。

我们深知各位旅行者对角色的喜爱与关注，也理解大家对此次仓促调整的不满。制作组将在相应角色（「蒲公英骑士·琴(风)」、「飞行冠军·安柏(火)」、「棘冠恩典·罗莎莉亚(冰)」、「星天水镜·莫娜(水)」）默认衣装的基础上对局部重新进行设计，并尽快以闲替衣装的形式进行发放。

当前闲替衣装设计进度如下：

![img](https://webstatic.mihoyo.com/upload/static-resource/2022/01/04/a86b6a1b4d7009d53723b0fab0430b98_5188369336774144103.png)

*图片仅供参考，请以最终上线品质为准*

闲替衣装具体发放时间等消息，请关注后续公告，我们将于第一时间与各位旅行者同步最新进度。

此外，在2.4版本更新结束后，我们还将发放相应补偿：

〓补偿内容〓

原石*1200

〓原石补偿范围〓

2022/01/05 6:00前冒险等阶达到5级及以上的旅行者。

制作组将在2.4版本更新维护完成后5小时内，以游戏内邮件的形式，向旅行者发放本次原石补偿。邮件有效期为30天，请及时领取附件；领取时间截至2.4版本结束前。

**我们深知这些补偿无法真正弥补各位旅行者的遗憾，千言万语，此时也只能汇作相伴。我们再次向各位旅行者致以最诚挚的歉意。**

最后，衷心感谢各位旅行者一直以来的支持与理解，以及对《原神》的陪伴与关心。



*注：加粗部分相关内容已从官网通知上删除，这里转载最初的版本。*

*又注：根据部分旅行者反馈，绫华的模型亦有修改。20220114更新*

<div>

    <!--
    The MIT License

    Copyright © 2010-2022 three.js authors

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    -->

    <script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/js/libs/ammo.wasm.js"></script>

    <!-- Import maps polyfill -->
    <!-- Remove this when import maps will be widely supported -->
    <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>

    <script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/gh/mrdoob/three.js/build/three.module.js"
            }
        }
    </script>

    <script type="module">

        import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/build/three.module.js';

        import { GUI } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/libs/lil-gui.module.min.js';

        import { OrbitControls } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/controls/OrbitControls.js';
        import { OutlineEffect } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/effects/OutlineEffect.js';
        import { MMDLoader } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/loaders/MMDLoader.js';
        import { MMDAnimationHelper } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/animation/MMDAnimationHelper.js';


        let mesh, camera, scene, renderer, effect;
        let helper, ikHelper, physicsHelper;

        const clock = new THREE.Clock();

        Ammo().then(function (AmmoLib) {

            Ammo = AmmoLib;

            init();
            animate();

        });


        function init() {

            const container = document.createElement('div');
            document.body.appendChild(container);

            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
            camera.position.z = 30;

            // scene

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xffffff);

            const gridHelper = new THREE.PolarGridHelper(30, 10);
            gridHelper.position.y = - 10;
            scene.add(gridHelper);

            const ambient = new THREE.AmbientLight(0x666666);
            scene.add(ambient);

            const directionalLight = new THREE.DirectionalLight(0x887766);
            directionalLight.position.set(- 1, 1, 1).normalize();
            scene.add(directionalLight);

            // renderer

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            effect = new OutlineEffect(renderer);


            // model

            function onProgress(xhr) {

                if (xhr.lengthComputable) {

                    const percentComplete = xhr.loaded / xhr.total * 100;
                    console.log(Math.round(percentComplete, 2) + '% downloaded');

                }

            }


            const modelFile = 'https://cdn.jsdelivr.net/gh/lwd-temp/site-cdn/mmd/blank.pmx';
            const vmdFiles = ['https://cdn.jsdelivr.net/gh/lwd-temp/site-cdn/mmd/blank.vmd'];

            helper = new MMDAnimationHelper({
                afterglow: 2.0
            });

            const loader = new MMDLoader();

            loader.loadWithAnimation(modelFile, vmdFiles, function (mmd) {

                mesh = mmd.mesh;
                mesh.position.y = - 10;
                scene.add(mesh);

                helper.add(mesh, {
                    animation: mmd.animation,
                    physics: true
                });

                ikHelper = helper.objects.get(mesh).ikSolver.createHelper();
                ikHelper.visible = false;
                scene.add(ikHelper);

                physicsHelper = helper.objects.get(mesh).physics.createHelper();
                physicsHelper.visible = false;
                scene.add(physicsHelper);

                initGui();
                helper.enable('animation', false);

            }, onProgress, null);


            const controls = new OrbitControls(camera, renderer.domElement);
            controls.minDistance = 10;
            controls.maxDistance = 100;

            window.addEventListener('resize', onWindowResize);

            function initGui() {

                const api = {
                    'model': "请选择模型",
                    'ik': true,
                    'outline': true,
                    'physics': true,
                    'show IK bones': false,
                    'show rigid bodies': false
                };

                const gui = new GUI();

                gui.add(api, 'model', { 安柏: 'https://cdn.jsdelivr.net/gh/lwd-temp/site-cdn/mmd/安柏/安柏.pmx', 罗莎莉亚: 'https://cdn.jsdelivr.net/gh/lwd-temp/site-cdn/mmd/罗莎莉亚/罗莎莉亚.pmx', 莫娜: 'https://cdn.jsdelivr.net/gh/lwd-temp/site-cdn/mmd/莫娜/莫娜1.0.pmx', 琴: 'https://cdn.jsdelivr.net/gh/lwd-temp/site-cdn/mmd/琴/琴.pmx', 神里绫华: 'https://cdn.jsdelivr.net/gh/lwd-temp/site-cdn/mmd/神里绫华/神里绫华.pmx' }).onChange(function () {
                    loader.loadWithAnimation(api['model'], vmdFiles, function (mmd) {

                        scene.remove(mesh);

                        mesh = mmd.mesh;
                        mesh.position.y = - 10;
                        scene.add(mesh);

                        helper.add(mesh, {
                            animation: mmd.animation,
                            physics: true
                        });

                        ikHelper = helper.objects.get(mesh).ikSolver.createHelper();
                        ikHelper.visible = false;
                        scene.add(ikHelper);

                        physicsHelper = helper.objects.get(mesh).physics.createHelper();
                        physicsHelper.visible = false;
                        scene.add(physicsHelper);

                        helper.enable('animation', false);

                    }, onProgress, null);

                });

                gui.add(api, 'ik').onChange(function () {

                    helper.enable('ik', api['ik']);

                });

                gui.add(api, 'outline').onChange(function () {

                    effect.enabled = api['outline'];

                });

                gui.add(api, 'physics').onChange(function () {

                    helper.enable('physics', api['physics']);

                });

                gui.add(api, 'show IK bones').onChange(function () {

                    ikHelper.visible = api['show IK bones'];

                });

                gui.add(api, 'show rigid bodies').onChange(function () {

                    if (physicsHelper !== undefined) physicsHelper.visible = api['show rigid bodies'];

                });

            }

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            effect.setSize(window.innerWidth, window.innerHeight);

        }


        function animate() {

            requestAnimationFrame(animate);

            render();

        }

        function render() {

            helper.update(clock.getDelta());
            effect.render(scene, camera);

        }

    </script>


</div>
