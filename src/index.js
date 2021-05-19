const Api = require('./nodes/Api');
const CallService = require('./nodes/CallService');
const ConfigServer = require('./nodes/ConfigServer');
const CurrentState = require('./nodes/CurrentState');
const DeviceAction = require('./nodes/device/DeviceAction');
const DeviceTrigger = require('./nodes/device/DeviceTrigger');
const EventsAll = require('./nodes/EventsAll');
const EventsState = require('./nodes/EventsState');
const FireEvent = require('./nodes/FireEvent');
const GetEntities = require('./nodes/GetEntities');
const GetHistory = require('./nodes/GetHistory');
const PollState = require('./nodes/PollState');
const RenderTemplate = require('./nodes/RenderTemplate');
const Sensor = require('./nodes/entity/Sensor');
const Switch = require('./nodes/entity/Switch');
const Tag = require('./nodes/Tag');
const Time = require('./nodes/Time');
const TriggerState = require('./nodes/TriggerState');
const WaitUntil = require('./nodes/WaitUntil');
const Webhook = require('./nodes/Webhook');
const Zone = require('./nodes/Zone');
const {
    Status,
    EventsStatus,
    SwitchEntityStatus,
} = require('./helpers/status');
const { createRoutes } = require('./routes');
const { getExposedSettings } = require('./helpers/exposed-settings');
const { migrate } = require('./migrations');

module.exports = function (RED) {
    createRoutes(RED);

    function apiNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new Api({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function callServiceNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new CallService({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function configServerNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        this.controller = new ConfigServer({
            node: this,
            config: this.config,
            RED,
        });
        this.controller.init();
    }

    function currentStateNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new CurrentState({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function deviceNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const params = {
            node: this,
            config: this.config,
            RED,
        };
        switch (config.deviceType) {
            case 'action': {
                const status = new Status(this);
                this.controller = new DeviceAction({ ...params, status });
                break;
            }
            case 'trigger': {
                const status = new EventsStatus(this);
                this.controller = new DeviceTrigger({ ...params, status });
                break;
            }
            default:
                this.status({ text: 'Error' });
                throw new Error(`Invalid entity type: ${config.deviceType}`);
        }
    }

    function entityNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);

        switch (config.entityType) {
            case 'binary_sensor':
            case 'sensor': {
                const status = new Status(this);
                this.controller = new Sensor({
                    node: this,
                    config: this.config,
                    RED,
                    status,
                });

                break;
            }
            case 'switch': {
                const status = new SwitchEntityStatus(this);
                this.controller = new Switch({
                    node: this,
                    config: this.config,
                    RED,
                    status,
                });
                break;
            }
            default:
                this({ text: 'Error' });
                throw new Error(`Invalid entity type: ${config.entityType}`);
        }
    }

    function eventsAllNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new EventsAll({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function eventsStateNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new EventsState({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function fireEventNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new FireEvent({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function getEntitiesNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new GetEntities({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function getHistoryNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new GetHistory({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function pollStateNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new PollState({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function renderTemplateNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new RenderTemplate({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function tagNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new Tag({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function timeNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new Time({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function triggerStateNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new TriggerState({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function waitUntilNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new Status(this);
        this.controller = new WaitUntil({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function webhookNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new Webhook({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    function zoneNode(config) {
        RED.nodes.createNode(this, config);

        this.config = migrate(config);
        const status = new EventsStatus(this);
        this.controller = new Zone({
            node: this,
            config: this.config,
            RED,
            status,
        });
    }

    const nodes = {
        'ha-api': apiNode,
        'api-call-service': callServiceNode,
        server: configServerNode,
        'api-current-state': currentStateNode,
        'ha-device': deviceNode,
        'ha-entity': entityNode,
        'server-events': eventsAllNode,
        'server-state-changed': eventsStateNode,
        'ha-fire-event': fireEventNode,
        'ha-get-entities': getEntitiesNode,
        'api-get-history': getHistoryNode,
        'poll-state': pollStateNode,
        'api-render-template': renderTemplateNode,
        'trigger-state': triggerStateNode,
        'ha-tag': tagNode,
        'ha-time': timeNode,
        'ha-wait-until': waitUntilNode,
        'ha-webhook': webhookNode,
        'ha-zone': zoneNode,
    };

    for (const type in nodes) {
        RED.nodes.registerType(type, nodes[type], getExposedSettings(type));
    }
};
