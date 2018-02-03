import {SavedPostComponent} from './saved-posts/saved-post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RedditConnectionService } from './reddit-connection.service';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RandomService } from './random.service';
import { SavedPostsResolver } from 'app/saved-posts/saved-posts-resolver';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        SavedPostsComponent,
        SavedPostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        RedditConnectionService,
        RandomService,
        SavedPostsResolver
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
