<template>
    <div class="container">
        <div class="row">
            <div class="columns">
                <div class="column">
                    <add-to-stream @completed="addStatus"></add-to-stream>
                    <div class="message" v-for="status in statuses">
                        <div class="message-header">
                            <p>{{ status.user.name }} said...</p>
                            <p>
                                <!--                                {{ // postedOn(status)}}-->
                                {{ status.created_at| ago | capitalize }}
                            </p>
                        </div>
                        <div class="message-body" v-text="status.body">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from "../models/Status";
    import AddToStream from "../components/AddToStream";

    export default {
        components: { AddToStream },

        data(){
            return {
                statuses: [],
            }
        },

        created(){
            // console.log('Component Mounted.')
            Status
                .all(statuses => this.statuses = statuses);
        },

        filters: {
            ago(date){
                return moment(date).fromNow();
            },
            capitalize(value){
                return value.toUpperCase();
            },
        },

        methods: {
            addStatus(status){
                this.statuses.unshift(status); //push X -> unshift O
                alert('Your status has been added to the stream');
                window.scrollTo(0,0);
            }
            // postedOn(status){
            //     return moment(status.created_at).fromNow();
            // },
        },


    }
</script>
